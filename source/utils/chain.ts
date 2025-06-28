import { $setter, propRules } from "./propRules";

export class Node<T = any> {
    public value: T;
    public next: Set<Node<T>> = new Set(); // 多出口
    public prev: Set<Node<T>> = new Set(); // 多入口

    constructor(value: T, next?: Iterable<Node<T>>) {
        this.value = value;
        if (next) {
            for (const node of next) {
                this.linkTo(node);
            }
        }
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

    /** 检查节点有效性（可自定义规则） */
    isValid(): boolean {
        return this.value !== undefined && !this.hasCyclicReference();
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

    /** 验证节点是否可加入当前图 */
    protected validateNode(node: Node<T>): boolean {
        return node.isValid() && !this.nodes.has(node);
    }

    /** 更新图结构 */
    protected updateGraph(newHead?: Node<T>): void {
        this.nodes = new Set([...this.traverse()]);
        if (newHead && !this.nodes.has(newHead)) {
            this.nodes.add(newHead);
        }
    }

    /** 可视化图结构（调试用） */
    visualize(): string {
        return [...this.traverse()]
            .map((node) => `${node.value} -> [${[...node.next].map((n) => n.value).join(", ")}]`)
            .join("\n");
    }
}
