import { eventObject } from "./events";
import { Layer } from "./layer";
import { randID } from "./utils/utils";

/**
 *  every object comprising senses, etc. chars, block, item
 */
export class gameBasicObject {
    readonly id: string;
    type: string = "";
    tag: Record<k, K> = {};
    layerIndex: number = 0;
    x: number = 0.0;
    y: number = 0.0;
    name: string = "";
    globalSize: number = 1.0;
    visitable: boolean = true;
    rotation: number = 0.0;
    layerset: Layer[] = [];
    eventList: Record<string, eventObject> = {};
    addEvListener(type: string, callback: Function) {
        let ev = new eventObject(type, callback);
        this.eventList[ev.id] = ev;
        return ev.id;
    }
    deteleEvListener(evID: string, replace?: eventObject) {
        let thisEv = this.eventList;
        delete thisEv[evID];
        if (replace instanceof eventObject) {
            thisEv[evID] = replace;
        }
    }
    constructor(id?: string) {
        this.id = id ?? randID();
    }
}
