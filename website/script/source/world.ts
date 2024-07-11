import { Floor, Scene } from "./scene";
import { randID, sleep, sleepUntil } from "./utils/utils";

export class World {
    readonly id: string = randID();
    tag: string[] = [];
    Characters: Record<string, characterCollection> = {};
    scene: Floor[] = [];

    constructor(opinions?: { time: number; init?: boolean }) {
        if (opinions?.time) this.starttime = opinions.time;
    }

    readonly starttime = new Date().getMilliseconds();
    get time() {
        return new Date().getMilliseconds() - this.starttime;
    }

    delete() {}
}
