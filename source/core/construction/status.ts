export enum AliveStatus {
    Alive = 0,
    Dying = -1,
    Dead = -2,
    NotExist = -3,
}

export enum StatusType {
    Buff = "buff",
    Debuff = "debuff",
    Environmental = "environmental",
    Ailment = "ailment",
}

export interface CharacterAbility {
    agile: number;
    speed: number;
    wisdom: number;
    attack: number;
    defense: number;
    maxHealth: number;
    maxMagic: number;
    [key: string]: number;
}

export const DefaultCharacterAbility: CharacterAbility = {
    agile: 0,
    speed: 0,
    wisdom: 0,
    attack: 0,
    defense: 0,
    maxHealth: 100,
    maxMagic: 50,
};

export interface StatusEffect {
    type: StatusType;
    duration: number;
    stacks: number;
    maxStacks: number;
    modifiers: Partial<CharacterAbility>;
}

export class StatusSystem {
    private statuses: Map<string, StatusEffect> = new Map();

    applyStatus(id: string, effect: StatusEffect): boolean {
        const existing = this.statuses.get(id);

        if (existing) {
            if (existing.stacks < existing.maxStacks) {
                existing.stacks++;
                existing.duration = Math.max(existing.duration, effect.duration);
                return true;
            }
            return false;
        }

        this.statuses.set(id, { ...effect, stacks: 1 });
        return true;
    }

    removeStatus(id: string): boolean {
        return this.statuses.delete(id);
    }

    clearAllStatuses(): void {
        this.statuses.clear();
    }

    update(deltaTime: number): void {
        this.statuses.forEach((effect, id) => {
            effect.duration -= deltaTime;
            if (effect.duration <= 0) {
                this.statuses.delete(id);
            }
        });
    }

    getModifiedAbilities(base: CharacterAbility): CharacterAbility {
        const result = { ...base };

        this.statuses.forEach((effect) => {
            Object.entries(effect.modifiers).forEach(([key, value]) => {
                if (key in result && typeof value === "number") {
                    result[key] += value * effect.stacks;
                }
            });
        });

        return result;
    }

    hasStatus(id: string): boolean {
        return this.statuses.has(id);
    }

    getStatusCount(): number {
        return this.statuses.size;
    }
}
