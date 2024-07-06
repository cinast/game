import { sense } from "./sense";
import { randID, sleep, sleepUntil } from "./utils/utils";

export class world {
    readonly id: string = randID();
    tag: string[] = [];
    Characters: Record<string, objectCollection> = {};
    sense: Record<string, senseCollection> = {};

    constructor(opinions?: {
        time?: number | bigint;
        init?: boolean;
        addtions?: sense[];
    }) {
        if (opinions?.time) {
            this.starttime = BigInt(opinions.time);
        } else {
            this.starttime = BigInt(new Date().getMilliseconds());
        }

        if (opinions?.addtions) {
            opinions.addtions.forEach((i) => {
                this.sense[i.name ?? i.id] = i;
            });
        }
    }

    readonly starttime: bigint;
    get time(): bigint {
        return BigInt(new Date().getMilliseconds()) - this.starttime;
    }
    // set lastcounter(v){

    // }
    // get lastcounter():bigint{
    //     return BigInt()
    // }
    // lastcounter:bigint = 0n

    delete() {}
}
