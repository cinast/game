import { Event, Interval } from "@src/core/events";
import { Layer } from "@src/core/layer";
import { attrTreePath, DeepPath, NestedObject, NestedObject_partial, randID } from "@src/utils/utils";
import { specialTick } from "./world";

/**
 *  every object comprising scenes, etc. chars, block, item
 */
export class gameBasicObject {
    id: string;
    type: string = "";
    tag: Record<K, k> = {};
    layerIndex: number = 0;
    x: number = 0.0;
    y: number = 0.0;
    name: string = "";
    globalSize: number = 1.0;
    visitable: boolean = true;
    rotation: number = 0.0;
    layerset: Layer[] = [];
    eventList: NestedObject_partial<string, Event | Event[]> = {};
    intervalList: NestedObject_partial<string, Interval | Interval[]> = {};

    addEvListener(type: string, callback: Function) {
        let ev = new Event(type, callback);
        this.eventList[ev.id] = ev;
        return ev.id;
    }

    deteleEvListener(evID: string, replace?: Event) {
        let thisEv = this.eventList;
        delete thisEv[evID];
        if (replace instanceof Event) {
            thisEv[evID] = replace;
        }
    }

    addInterval(delay: number | specialTick, callback: Function) {
        let it = new Interval(delay, callback);
        this.intervalList[it.id] = it;
        return it.id;
    }

    deteleInterval(itID: string, replace?: Interval) {
        let thisIt = this.eventList;
        delete thisIt[itID];
        if (replace instanceof Interval) {
            thisIt[itID] = replace;
        }
    }

    constructor(id?: string) {
        this.id = id ?? randID();
    }
}
