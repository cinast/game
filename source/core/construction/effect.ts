import { uuid } from "@src/utils/utils";

export enum EffectType {
    Buff = "buff",
    Debuff = "debuff",
    Neutral = "neutral",
}

export interface EffectOptions {
    duration?: number;
    maxStacks?: number;
    refreshable?: boolean;
    hidden?: boolean;
}

export class Effect {
    readonly id: string;
    name: string;
    type: EffectType;
    tags: string[] = [];
    predicate: () => boolean;
    options: EffectOptions;
    stacks: number = 1;
    remainingTime?: number;

    constructor(name: string, type: EffectType = EffectType.Neutral, predicate: () => boolean, options: EffectOptions = {}) {
        this.id = `effect_${uuid.v4()}`;
        this.name = name || `effect_${this.id.slice(0, 8)}`;
        this.type = type;
        this.predicate = predicate;
        this.options = {
            duration: Infinity,
            maxStacks: 1,
            refreshable: true,
            hidden: false,
            ...options,
        };
    }

    apply(): void {
        if (this.options.maxStacks && this.stacks < this.options.maxStacks) {
            this.stacks++;
        }
        if (this.options.refreshable && this.options.duration) {
            this.remainingTime = this.options.duration;
        }
    }

    remove(): void {
        this.stacks = 0;
        this.remainingTime = 0;
    }

    update(deltaTime: number): boolean {
        if (this.remainingTime !== undefined) {
            this.remainingTime -= deltaTime;
            if (this.remainingTime <= 0) {
                this.remove();
                return false;
            }
        }
        return true;
    }

    isActive(): boolean {
        return this.stacks > 0 && this.predicate();
    }

    getDescription(): string {
        return `${this.name} (${this.type}) - Stacks: ${this.stacks}`;
    }
}

export class CompositeEffect extends Effect {
    private effects: Effect[] = [];

    constructor(name: string, effects: Effect[], type?: EffectType, predicate?: () => boolean, options?: EffectOptions) {
        super(name, type || EffectType.Neutral, predicate || (() => true), options);
        this.effects = effects;
    }

    apply(): void {
        super.apply();
        this.effects.forEach((effect) => effect.apply());
    }

    remove(): void {
        super.remove();
        this.effects.forEach((effect) => effect.remove());
    }
}
