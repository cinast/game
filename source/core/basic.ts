import { Interval, Layer, Scene } from "@src/router/gamecore";
import { NestedObject_partial } from "@src/utils/types";
import { uuid } from "@src/utils/utils";

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
    atScene: Scene | undefined | null;
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
