import { randID, sleep, sleepUntil } from "./utils/utils";

export class world {
    readonly id: string = randID();
    tag: string[] = [];
    characters: Record<string, objectCollection> = {};
    sense: Record<string, senseCollection> = {};

    constructor(opinions?: {
        runRigthNow?: boolean;
        time?: number | bigint;
        init?: boolean;
        addtions?: sense[];
    }) {
        if (opinions?.time) {
            this.starttime = BigInt(opinions.time)
        } else {
            this.starttime = new Date().getMilliseconds()
        }

        if (opinions?.addtions) {
            opinions.addtions.forEach((i) => {
                this.sense[i.name || i.id] = i
            })
        }
        if (opinions?.runRigthNow) {
            this.start
        }
    }

    readonly starttime: bigint;
    get time(): bigint {
        return Bigint(new Date().getMilliseconds()) - this.starttime
    }

    paused: boolean = true;
    start() {
        this.paused = false;
    }
    #runstack: Function[] = [];
    #onrun: gameCollection;
    set lastcounter():bigint{
        
    }
    get lastcounter(){

    }
    run(){
        while(this.#runstack.length > 0){
        (this.#runstack.shift() as Function)();
        sleepUntil(()=>this.paused);
    }
}
    delete() { }
    
}
