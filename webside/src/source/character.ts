import { basicObject } from "./basic";
import { eventObjet } from "./events";
import { randID, T } from "./utils/utils";
interface char_ability {
    speed: number;
    image: number;
    health: number;
    attack: number;
    defense: number;
    [key: string]: K | bigint;
}

export class Character<op = {}> extends basicObject {
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
    cloneNumber: number = 0;
    hasCloned: number = 0;
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
        let cl = new clonedCharacter(this);
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
    constructor({ id = randID(), tag }: { id?: string; tag?: T }, other?: op) {
        super({ id, tag }, other);
    }
}
export class clonedCharacter extends Character {
    isClone: boolean = true;
    cloneNumber: bigint;
    set cloneFrom(char: Character | undefined) {
        if (this.cloneFrom?.BaseType == "Character") this.cloneFrom = char;
    }
    constructor(baseChara: Character | clonedCharacter) {
        super();
        this.cloneNumber = baseChara.hasCloned;
        this.cloneFrom = baseChara;
    }
}
export class Layer {
    readonly id: string;
    readonly BaseType: string = "layer";
    type: string = "nomal";
    tag: string[] = [];
    name: string = "";
    layerIndex = 0;
    // content: ImageData;
    parent: Character | undefined = undefined;
    constructor(type?: string, size?: number, id?: string) {
        this.id = id ?? randID();
        this.type = type ?? "";
    }
    moveto(index: number) {
        if (this.parent === undefined) return;
        let l = this.parent.layerset;
        l.splice(index, 0, l.splice(this.layerIndex, 1)[0]);
    }
    delete() {
        return this.parent == undefined
            ? new TypeError()
            : this.parent.layerset.splice(this.layerIndex, 1)[0];
    }
    concatLayer() {}
}
