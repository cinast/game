import { specialTick } from "@src/router/gamecore";
import { randID } from "@src/utils/utils";

export class Event {
    readonly id: string;
    type: string = "";
    tag: string[] = [];
    callback: Function;
    triged: boolean = false;
    constructor(type: string, callback: Function, tag?: string[], id?: string) {
        this.id = id ?? randID();
        this.type = type;
        this.tag = tag ?? [];
        this.callback = callback;
    }
}

export class Interval {
    readonly id: string;
    type: string = "";
    tag: string[] = [];
    delay: number | specialTick = 0;
    callback: Function;
    triged: boolean = false;
    constructor(delay: number | specialTick, callback: Function, tag?: string[], id?: string) {
        this.id = id ?? randID();
        this.tag = tag ?? [];
        this.delay = delay;
        this.callback = callback;
    }
}
