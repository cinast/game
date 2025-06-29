import { AliveStatus, CharacterAbility, Direction, gameBasicObject } from "@src/router/gamecore";
import { SkillTree } from "@src/skills";
import { NestedObject, NestedObject_partial } from "@src/utils/types";

export class Character extends gameBasicObject {
    status = {
        health: 0,
        magic: 0,
        is_alive: AliveStatus.Alive,
    };

    ability: CharacterAbility = {
        agile: 0,
        speed: 0,
        wisdom: 0,
        attack: 0,
        defense: 0,
        maxHealth: 0,
        maxMagic: 0,
    };

    skillTree: SkillTree = new SkillTree();

    effect: {} = {
        cursed: [],
    };

    action = {
        walk(direction: Direction | number) {
            this;
        },
    };

    isClone: boolean = false;
    cloneNumber: bigint = 0n;
    hasCloned: bigint = 0n;
    clones: clonedCharacter[] = [];
    CloneFrom: Character | void = undefined;

    eventList: NestedObject<string, Event | Event[]> = {
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

    refresh() {}
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

export class PlayerCharacter extends Character {
    name: string = "";
    ability: CharacterAbility = {
        agile: 1,
        speed: 1.0,
        wisdom: 0,
        health: 0,
        attack: 0,
        defense: 0,
        maxHealth: 0,
        maxMagic: 0,
    };
    /**
     * playerid (template)
     */
    controlBy: string = "";
}
