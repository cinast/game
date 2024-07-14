import { Character } from "@src/core/character";
import { Floor, Scene } from "@src/core/scene";
import { randID, sleep, sleepUntil } from "@src/utils/utils";

export class World {
    readonly id: string = randID();
    tag: string[] = [];
    Characters: Record<string, Character> = {};
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