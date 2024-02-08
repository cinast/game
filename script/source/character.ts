import { basicObject } from "./basic";
import { Layer } from "./layer";
import { eventObjet } from "./events";

export class character extends basicObject {
    BaseType = "character";
    x: number = 0.0;
    y: number = 0.0;
    name: string = "";
    globalSize: number = 1.0;
    visitable: boolean = true;
    rotation: number = 0.0;
    isClone: boolean = false;
    cloneNumber: number = 0;
    hasCloned: number = 0;
    clones: clonedCharacter[] = [];
    CloneFrom: character | undefined = undefined;
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
    set cloneFrom(char: character | undefined) {
        if (!this.isClone && this.CloneFrom?.BaseType !== "character") return;
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
}
export class clonedCharacter extends character {
    isClone: boolean = true;
    set cloneFrom(char: character | undefined) {
        if (this.CloneFrom?.BaseType == "character") this.CloneFrom = char;
    }
    constructor(baseChara: character | clonedCharacter) {
        super();
        this.cloneNumber = baseChara.hasCloned;
        this.cloneFrom = baseChara;
    }
}
