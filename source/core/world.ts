import { Event, Floor, Scene, Character, Interval } from "@src/router/gamecore";
import { NestedObject, NestedObject_partial, randID, sleep, sleepUntil } from "@src/utils/utils";

export type specialTick = "";

export class World {
    readonly id: string = randID();
    name: string = "";
    tag: Record<K, k> = {};
    Characters: Record<string, Character> = {};
    scene: Floor[] = [];

    eventList: NestedObject_partial<string, Event | Event[]> & {
        onStopped: Event;
    } = {
        onStopped: new Event("onStop[ed", () => {}),
    };
    intervalList: NestedObject_partial<string, Interval | Interval[]> & {
        eachTick: Event[];
    } = {
        eachTick: [],
    };

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

    constructor(opinions?: { time: number; init?: boolean }) {
        if (opinions?.time) this.starttime = opinions.time;
    }

    readonly starttime = new Date().getMilliseconds();
    get time() {
        return new Date().getMilliseconds() - this.starttime;
    }

    delete() {}
}
