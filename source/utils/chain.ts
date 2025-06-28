import { $setter, propRules } from "./propRules";

export class Node<T = any> {
    public next: Set<Node<T>> = new Set();
    public prev: Set<Node<T>> = new Set();
    public parentChain?: Chain<T>; // 所属的 Chain

    constructor(parentChain?: Chain<T>) {
        this.parentChain = parentChain;
    }

    /** 连接到目标节点（建立双向关系） */
    linkTo(node: Node<T>): void {
        this.next.add(node);
        node.prev.add(this);
    }

    /** 断开与目标节点的连接 */
    unlinkFrom(node: Node<T>): void {
        this.next.delete(node);
        node.prev.delete(this);
    }

    /** 检查节点有效性（可自定义规则）
     * @deprecated
     */
    isValid(): boolean {
        return true;
    }

    /** 检测自引用或循环引用 */
    hasCyclicReference(visited = new Set<Node<T>>()): boolean {
        if (visited.has(this)) return true;
        visited.add(this);
        return [...this.next].some((child) => child.hasCyclicReference(new Set(visited)));
    }
}

export class Chain<T = any> {
    @propRules.watchSet<Node<T> | undefined>((thisArg, key, newNode) => {
        if (newNode && !thisArg.validateNode(newNode)) {
            throw new Error("Invalid node: cyclic reference or duplicate");
        }
        thisArg.updateGraph(newNode);
        return newNode;
    })
    head: Node<T> | undefined;
    // tail: Node<T> | undefined;

    @propRules.watchSet<Node<T> | undefined>((thisArg, key, newNode) => {
        if (newNode && !thisArg.validateNode(newNode)) {
            throw new Error("Invalid node: cyclic reference or belongs to another chain");
        }
        thisArg.updateOwnership(newNode);
        return newNode;
    })
    protected nodes: Set<Node<T>> = new Set();

    /** 添加节点到图中（自动建立连接关系） */
    append(node: Node<T>): void {
        if (!this.head) {
            this.head = node;
        }
        this.nodes.add(node);
    }

    /** 深度优先遍历所有节点 */
    *traverse(): Generator<Node<T>> {
        const visited = new Set<Node<T>>();
        const stack = this.head ? [this.head] : [];

        while (stack.length) {
            const node = stack.pop()!;
            if (!visited.has(node)) {
                visited.add(node);
                yield node;
                stack.push(...node.next);
            }
        }
    }

    /** 更新图结构 */
    protected updateGraph(newHead?: Node<T>): void {
        this.nodes = new Set([...this.traverse()]);
        if (newHead && !this.nodes.has(newHead)) {
            this.nodes.add(newHead);
        }
    }

    /** 连接另一个 Chain 的头部节点 */
    linkTo(otherChain: Chain<T>): void {
        if (!this.head || !otherChain.head) return;
        this.head.linkTo(otherChain.head);
    }

    /** 验证节点是否属于当前 Chain */
    protected validateNode(node: Node<T>): boolean {
        return (
            node.isValid() && (node.parentChain === undefined || node.parentChain === this) // 允许无主节点或属于当前链
        );
    }

    /** 更新节点所有权 */
    protected updateOwnership(node?: Node<T>): void {
        if (node) {
            node.parentChain = this;
            this.nodes.add(node);
        }
    }

    /** 合并另一个 Chain 的所有节点 */
    merge(otherChain: Chain<T>): void {
        for (const node of otherChain.nodes) {
            node.parentChain = this;
            this.nodes.add(node);
        }
        otherChain.nodes.clear();
    }

    /** 可视化图结构（调试用） */
    // visualize(): string {
    //     return [...this.traverse()]
    //         .map((node) => `${node} -> [${[...node.next].map((n) => n).join(", ")}]`)
    //         .join("\n");
    // }
}
