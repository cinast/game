import { Character } from "./character";
import {
    NestedObject,
    NestedObject_and_partialItself,
    NestedObject_partial,
    randID,
} from "./utils/utils";
import { gameBasicObject } from "./basic";
import { Item } from "./item";
import { eventObject } from "./events";
import { Buildiing, FloorTransfer, Transfer } from "./buildings";

export class Scene {
    id: string = `Scene#${randID()}`;
    type: string = "";
    name: string = "";
    tag: string[] = [];
    Idnex = 0;
    Characters: Record<string, Character> = {};
    scale: {
        col: bigint;
        row: bigint;
    } = {
        col: 0n,
        row: 0n,
    };

    content: any;
    connectTo: NestedObject_partial<string, Transfer> & {
        enterance: NestedObject_and_partialItself<string, Transfer>;
        exits: NestedObject_and_partialItself<string, Transfer>;
    } = {
        enterance: {},
        exits: {},
    };
    addCharacter(...Character: Character[]) {
        Character.forEach((c) => {
            this.Characters = { ...this.Characters, [c.name]: c };
        });
    }
    remove() {}

    eventList: NestedObject<string, eventObject> = {};
    addEvListener(type: string, callback: Function) {
        let ev = new eventObject(type, callback);
        this.eventList[ev.id] = ev;
        return ev.id;
    }
    deteleEvListener(evID: string, replace?: eventObject) {
        let thisEv = this.eventList;
        delete thisEv[evID];
        if (replace instanceof eventObject) {
            thisEv[evID] = replace;
        }
    }

    constructor(
        name: string = `${randID()}`,
        connectTo: NestedObject_partial<string, Transfer> & {
            enterance: NestedObject_and_partialItself<string, Transfer>;
            exits: NestedObject_and_partialItself<string, Transfer>;
        }
    ) {
        this.name = name;
        this.connectTo = connectTo;
    }
}

export class specialScene extends Scene {}

export class Floor extends Scene {
    id: string = `Floor#${randID()}`;
    type: string = "floor";
    /**
     * if not set it, it defualtly 20*20
     */
    scale: { col: bigint; row: bigint } = {
        col: 20n,
        row: 20n,
    };
    content: any;
    connectTo: NestedObject_partial<string, Transfer> & {
        enterance: NestedObject_and_partialItself<string, Transfer>;
        exits: NestedObject_and_partialItself<string, Transfer>;
        /**
         * quick link to get enterance that to up or down floor
         */
        floorTo: NestedObject_and_partialItself<string, Transfer> & {
            next: Partial<Transfer>;
            prev: Partial<Transfer>;
        };
    } = {
        enterance: {
            /**
             *
             */
            fromPrev: {},
        },
        exits: {
            toNextFloor: {},
        },
        floorTo: {
            next: {},
            prev: {},
        },
    };
    constructor(
        height: bigint,
        width: bigint,
        // fillwith?: BlockUnit,
        seed?: string | number,
        connectTo: NestedObject_partial<string, Transfer> & {
            enterance: NestedObject_and_partialItself<string, Transfer>;
            exits: NestedObject_and_partialItself<string, Transfer>;
            floorTo: NestedObject_and_partialItself<string, Transfer> & {
                next: Partial<Transfer>;
                prev: Partial<Transfer>;
            };
        } = {
            enterance: {},
            exits: {},
            floorTo: {
                next: {},
                prev: {},
            },
        }
    ) {
        let up = new FloorTransfer("toPrevFloor");
        let down = new FloorTransfer("ToNextFloor");
        connectTo.floorTo.next = down;
        connectTo.floorTo.prev = up;
        super("", connectTo);
        this.scale.row = width;
        this.scale.col = height;
        if (!seed) {
            for (let i = 0; i < height; i++) {
                this.content.push([]);
                for (let j = 0; j < width; i++) {
                    this.content[i].push(new BlockUnit(`block[${i},${j}]`));
                }
            }
        } else {
            /** to be continued */
        }
    }
}

/**
 *  basic unit of block
 */
export class BlockUnit extends gameBasicObject {
    covers: NestedObject_partial<
        string,
        (Character & Buildiing)[] | (Character & Buildiing)
    > & {
        characters: Character[];
        buildings: Buildiing[];
    } = {
        characters: [],
        buildings: [],
    };
    clear(targets: string) {}
}
