import { uuid } from "@src/utils/utils";
import { Event, Floor, Character, Interval } from "@src/router/gamecore";
import { NestedObject_partial } from "@src/utils/types";

export type specialTick = "";

export class World {
    readonly id: string = uuid.v4();
    name: string = "";
    tag: Record<K, k> = {};
    Characters: Set<Character> = new Set();
    scene: Floor[] = [];
    refresh() {
        this.scene.forEach((scene) => {
            scene.refresh();
        });
    }

    eventList: NestedObject_partial<string, Event | Event[]> & {
        onStopped: Event;
    } = {
        onStopped: new Event(
            "onStoped",
            () => {},
            () => this.isPaused
        ),
    };
    intervalList: NestedObject_partial<string, Interval | Interval[]> & {
        eachTick: Event[];
    } = {
        eachTick: [],
    };

    readonly starttime = new Date().getMilliseconds();

    get reallKeeppedTime() {
        return new Date().getMilliseconds() - this.starttime;
    }

    isPaused: boolean = false;

    tick: number = 0;

    tickTimerList: Array<{ id: K; nextTickAt: number; body: Interval | Event }> = [];

    taskStruck: Array<Function> = [];

    declare gatheSomething: (id: K) => any;

    delete() {}

    constructor(opinions?: { time: number; init?: boolean }) {
        if (opinions?.time) this.starttime = opinions.time;
    }
}
