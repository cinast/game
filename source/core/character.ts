import { Event } from "./events";
import { gameBasicObject } from "./basic";
import { NestedObject_partial } from "@src/utils/types";

export class Character extends gameBasicObject {
    status: {
        health: number;
        magic: number;
        is_alive: alive;
    } = {
        health: 0,
        magic: 0,
        is_alive: alive.alive,
    };

    skill: Record<string, number> = {};

    effect: {} = {
        cursed: [],
    };

    action = {
        walk(direction: direction | number) {},
    };

    isClone: boolean = false;
    cloneNumber: bigint = 0n;
    hasCloned: bigint = 0n;
    clones: clonedCharacter[] = [];
    CloneFrom: Character | void = undefined;

    eventList: NestedObject_partial<string, Event | Event[]> = {
        onJoin: [],
        onTurn: [],
        onUseSth: [],
        onActs: {
            Attack: [],
            Defend: [],
            Cast: [],
            Kick: [],
            Shout: [],
            Walk: [],
        },
        onDeath: [],
    };
    /**  */
    moveto(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    clone() {
        this.hasCloned++;
        let cl = new clonedCharacter(this);
        this.clones.push(cl);
        return cl;
    }
    set cloneFrom(char: Character | void) {
        if (!this.isClone && this.CloneFrom instanceof Character) return;
        this.CloneFrom = char;
    }

    constructor(id?: string) {
        super(id);
    }
}
export class clonedCharacter extends Character {
    isClone: boolean = true;
    cloneNumber: bigint;
    set cloneFrom(char: Character | void) {
        if (this instanceof Character) {
            this.cloneFrom = char;
            char?.clones.push(this);
        }
    }
    constructor(baseChara?: Character | clonedCharacter, id?: string) {
        super(id);
        this.cloneNumber = baseChara?.hasCloned ?? -1n;
        this.cloneFrom = baseChara;
    }
}

enum alive {
    alive = 0,
    dying = -1,
    dead = -2,
    not_exist = -3,
}

enum direction {
    front = "a",
    right = "b",
    back = "c",
    left = "d",
}

export interface char_ability {
    agile: number;
    speed: number;
    wisdom: number;
    attack: number;
    defense: number;
    [key: string]: K | bigint;
}

export const default_char_ability: char_ability = {
    agile: 0,
    speed: 0,
    wisdom: 0,
    max_health: 0,
    max_magic: 0,
    attack: 0,
    defense: 0,
};
