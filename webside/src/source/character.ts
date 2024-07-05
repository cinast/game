import { basicObject } from "./basic";
import { eventObjet } from "./events";
import { Layer } from "./layer";
import { randID, K } from "./utils/utils";
interface char_ability {
    speed: number;
    image: number;
    health: number;
    attack: number;
    defense: number;
    [key: string]: K | bigint;
}

const defualt_char_ability: char_ability = {
    speed: 0,
    image: 0,
    health: 0,
    attack: 0,
    defense: 0,
};

export class Character extends basicObject {
    BaseType = "Character";
    x: number = 0.0;
    y: number = 0.0;
    name: string = "";
    globalSize: number = 1.0;
    abilty: char_ability = {
        speed: 0,
        image: 0,
        health: 0,
        attack: 0,
        defense: 0,
    };
    visitable: boolean = true;
    rotation: number = 0.0;
    isClone: boolean = false;
    cloneNumber: bigint = 0n;
    hasCloned: bigint = 0n;
    clones: clonedCharacter[] = [];
    CloneFrom: Character | undefined = undefined;
    effects = {};
    layerset: Layer[] = [];
    eventList: Record<string, eventObjet> = {};
    moveto(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    clone() {
        this.hasCloned++;
        let cl = new clonedCharacter(this, {});
        this.clones.push(cl);
        return cl;
    }
    set cloneFrom(char: Character | undefined) {
        if (!this.isClone && this.CloneFrom?.BaseType !== "Character") return;
        this.CloneFrom = char;
    }
    addEvListener(type: string, callback: Function) {
        let ev = new eventObjet(type, callback);
        this.eventList[ev.id] = ev;
        return ev.id;
    }
    deteleEvListener(evID: string, replace?: eventObjet) {
        let thisEv = this.eventList;
        delete thisEv[evID];
        if (replace instanceof eventObjet) {
            thisEv[evID] = replace;
        }
    }
    constructor({
        ability,
        id = randID(),
        tag,
    }: {
        ability?: char_ability;
        id?: string;
        tag?: Record<K, K>;
    }) {
        super({ BaseType: "Character", id, tag, type: "Character" });
        this.abilty = ability ?? defualt_char_ability;
    }
}
export class clonedCharacter extends Character {
    isClone: boolean = true;
    cloneNumber: bigint;
    set cloneFrom(char: Character | undefined) {
        if (this.cloneFrom?.BaseType == "Character") this.cloneFrom = char;
    }
    constructor(
        baseChara: Character | clonedCharacter,
        {
            ability,
            id = randID(),
            tag,
        }: {
            ability?: char_ability;
            id?: string;
            tag?: Record<K, K>;
        }
    ) {
        super({ ability, id, tag });
        this.cloneNumber = baseChara.hasCloned;
        this.cloneFrom = baseChara;
    }
}
