import { uuid } from "@src/utils/utils";
import { specialTick } from "@src/router/gamecore";

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
     * or wait until `this.predicater` gives you anwser
     */
    callback: (...arg: any[]) => number | void;

    /**
     * check if is time to trig \
     * if you dont set it, defualt retrun is `true`
     */
    predicater: () => boolean;

    /**
     * @notice if this event object be setted at world or scene's `tickTimerList`, `triged` will keep `true` until this round ended,
     */
    triged: boolean = false;

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
        this.predicater = predicate ?? (() => true);
    }
}

export class Interval {
    readonly id: string;
    type: string = "";
    tag: string[] = [];
    delay: number | specialTick = 0;
    callback: (...arg: any[]) => number | void;
    triged: boolean = false;
    constructor(delay: number | specialTick, callback: (...arg: any[]) => number | void, tag?: string[], id?: string) {
        this.id = id ?? uuid.v4();
        this.tag = tag ?? [];
        this.delay = delay;
        this.callback = callback;
    }
}
