import { Event, Interval } from "@src/core/events";
import { Layer } from "@src/core/layer";
import { attrTreePath, DeepPath, NestedObject, NestedObject_partial, uuid } from "@src/utils/utils";
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

    constructor(id?: string) {
        this.id = id ?? uuid.v4();
    }
}
