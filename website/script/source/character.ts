import { gameBasicObject } from "./basic";
import { eventObject } from "./events";
import { Layer } from "./layer";
import { randID, K } from "./utils/utils";
export interface char_ability {
    agile: number;
    movespeed: number;
    wisdom: number;
    health: number;
    attack: number;
    defense: number;
    [key: string]: K | bigint;
}

export const defualt_char_ability: char_ability = {
    agile: 0,
    movespeed: 0,
    wisdom: 0,
    health: 0,
    attack: 0,
    defense: 0,
};

export class Character extends gameBasicObject {
    abilty: char_ability = {
        agile: 0,
        movespeed: 0,
        wisdom: 0,
        health: 0,
        attack: 0,
        defense: 0,
    };
    ability_base_bound: char_ability = {
        agile: 0,
        movespeed: 0,
        wisdom: 0,
        health: 0,
        attack: 0,
        defense: 0,
    };

    isClone: boolean = false;
    cloneNumber: bigint = 0n;
    hasCloned: bigint = 0n;
    clones: clonedCharacter[] = [];
    CloneFrom: Character | undefined = undefined;
    effects = {};

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
    set cloneFrom(char: Character | undefined) {
        if (!this.isClone && this.CloneFrom instanceof Character) return;
        this.CloneFrom = char;
    }

    constructor(ability?: char_ability, id?: string) {
        super(id);
        this.abilty = ability ?? defualt_char_ability;
    }
}
export class clonedCharacter extends Character {
    isClone: boolean = true;
    cloneNumber: bigint;
    set cloneFrom(char: Character | undefined) {
        if (this instanceof Character) {
            this.cloneFrom = char;
            char?.clones.push(this);
        }
    }
    constructor(
        baseChara: Character | clonedCharacter,
        ability?: char_ability,
        id?: string
    ) {
        super(ability, id);
        this.cloneNumber = baseChara.hasCloned;
        this.cloneFrom = baseChara;
    }
}
