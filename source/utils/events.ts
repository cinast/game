import { uuid } from "@src/utils/utils";
import { specialTicks } from "@src/router/gamecore";
import { customObject } from "./types";

export class Event {
    readonly id: string;
    type: string = "";
    tag: string[] = [];

    /**
     * specifically if you need one-time-ev
     */
    reExecutable: boolean = true;

    /**
     * you can call it right now, \
     * or wait until `this.predicator` gives you answer
     */
    callback: (...arg: any[]) => number | void;

    /**
     * check if is time to trig \
     * if you don’t set it, default return is `true`
     */
    predicator: () => boolean;

    /**
     * @notice if this event object be able to set at world or scene's `tickTimerList`, `trigged` will keep `true` until this round ended,
     */
    trigged: boolean = false;

    constructor(
        type: string,
        callback: (...arg: any[]) => number | void,
        predicate?: () => boolean,
        reExecutable: boolean = true,
        tag?: string[],
        id?: string
    ) {
        this.id = id ?? uuid.v4();
        this.type = type;
        this.tag = tag ?? [];

        this.reExecutable = reExecutable;
        this.callback = callback;
        this.predicator = predicate ?? (() => true);
    }
    reset() {
        this.trigged = false;
    }
}

export class Interval {
    readonly id: string;
    type: string = "";
    tag: string[] = [];
    delay: number | specialTicks = 0;
    callback: (...arg: any[]) => number | void;
    trigged: boolean = false;
    constructor(delay: number | specialTicks, callback: (...arg: any[]) => number | void, id?: string, tag?: string[]) {
        this.id = id ?? uuid.v4();
        this.tag = tag ?? [];
        this.delay = delay;
        this.callback = callback;
    }

    reset() {
        this.trigged = false;
    }
}

export class Quest {
    objectives: Map<string, { target: string; progress: number }> = new Map();
    onObjectiveComplete = new Event("objectiveComplete", (id: string) => {
        this.objectives.get(id)!.progress = 100;
    });
}
