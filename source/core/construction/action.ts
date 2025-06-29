export enum Direction {
    Front = "a",
    Right = "b",
    Back = "c",
    Left = "d",
}

export interface ActionOptions {
    priority?: number;
    interruptible?: boolean;
    cooldown?: number;
}

export abstract class Action {
    readonly id: string;
    name: string;
    options: ActionOptions;

    constructor(name: string, options: ActionOptions = {}) {
        this.id = `action_${Date.now()}`;
        this.name = name;
        this.options = {
            priority: 0,
            interruptible: true,
            cooldown: 0,
            ...options,
        };
    }

    abstract execute(): Promise<void>;
    abstract cancel(): void;
}

export class MoveAction extends Action {
    constructor(public direction: Direction, public distance: number = 1, options?: ActionOptions) {
        super(`Move_${direction}`, options);
    }

    async execute(): Promise<void> {
        // 移动逻辑实现
    }

    cancel(): void {
        // 取消移动逻辑
    }
}

export class AttackAction extends Action {
    constructor(public targetId: string, public damage: number, options?: ActionOptions) {
        super(`Attack_${targetId}`, {
            interruptible: false,
            ...options,
        });
    }

    async execute(): Promise<void> {
        // 攻击逻辑实现
    }

    cancel(): void {
        // 取消攻击逻辑
    }
}

export class InteractAction extends Action {
    constructor(public targetId: string, options?: ActionOptions) {
        super(`Interact_${targetId}`, options);
    }

    async execute(): Promise<void> {
        // 交互逻辑实现
    }

    cancel(): void {
        // 取消交互逻辑
    }
}
