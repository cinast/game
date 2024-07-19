import { Character } from "@src/core/character";
import { NestedObject, NestedObject_partial, randID } from "@src/utils/utils";
import { gameBasicObject } from "@src/core/basic";
import { Item } from "./item";
import { Event, Interval } from "@src/core/events";
import { Buildiing, FloorTransfer, Transfer } from "@src/core/buildings";
import { specialTick } from "@src/router/gamecore";

export class Scene {
    id: string = `Scene#${randID()}`;
    type: string = "";
    name: string = "";
    tag: string[] = [];
    Idnex = 0;
    Characters: Record<string, Character> = {};
    scale: {
        col: number;
        row: number;
    } = {
        col: 0,
        row: 0,
    };

    /**
     * what inside
     */
    content: any;

    /**
     * you need give ways to extends instances
     */
    connectWith(...arg: any[]) {
        return;
    }
    /**
     * gets in or goes to, allow custom transfers groups `{a:(b{c:tran}})`
     */
    transfers: NestedObject_partial<string, Transfer> & {
        /**
         * where u get in
         */
        enterance: NestedObject_partial<string, Transfer>;
        /**
         * get out of here
         */
        exits: NestedObject_partial<string, Transfer>;
    } = {
        enterance: {},
        exits: {},
    };

    connects: NestedObject_partial<string, Scene> = {};

    /**
     * @deprecated
     */
    // connectWith() {}

    addCharacter(...Character: Character[]) {
        Character.forEach((c) => {
            this.Characters = { ...this.Characters, [c.name]: c };
        });
    }
    remove() {}

    eventList: NestedObject_partial<string, Event | Event[]> = {};
    intervalList: NestedObject_partial<string, Interval | Interval[]> = {};

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

    constructor(
        name: string = `${randID()}`,
        connectTo: NestedObject_partial<string, Transfer> & {
            enterance: NestedObject_partial<string, Transfer>;
            exits: NestedObject_partial<string, Transfer>;
        }
    ) {
        this.name = name;
        this.transfers = connectTo;
    }
}

export class specialScene extends Scene {}

export class Floor extends Scene {
    id: string = `Floor#${randID()}`;
    type: string = "floor";
    /**
     * if not set it, it defualtly 20*20
     */
    scale: {
        col: number;
        row: number;
    } = {
        col: 20,
        row: 20,
    };
    content: BlockUnit[][] = [];

    transfers: NestedObject_partial<string, Transfer> & {
        enterance: NestedObject_partial<string, Transfer>;
        exits: NestedObject_partial<string, Transfer>;
    } = {
        enterance: {
            fromPrev: {},
        },
        exits: {
            toNextFloor: {},
        },
    };

    connects: NestedObject_partial<string, Scene> & {
        /**
         * get enterance that to up or down floor. \
         * In some cases, they may appear at `enteraance`, `exit` and here at meantime
         */
        floorTo: NestedObject_partial<string, Floor> & {
            next: Partial<Floor>;
            prev: Partial<Floor>;
        };
    } = {
        floorTo: {
            next: {},
            prev: {},
        },
    };

    /**
     * from this florr to target floor
     */
    connectWith(tarFloor: Floor, isbidirectional: boolean = true) {
        // this
        let ext = this.transfers.exits[tarFloor.id] as Transfer;
        ext = ext ?? new Transfer("ToNextFloor");

        // tar
        let ent = tarFloor.transfers.enterance[this.id] as Transfer;
        ent = ent ?? new Transfer("FromPrevFloor");

        ext.connect(ent, true);
    }

    constructor(
        height: number,
        width: number,
        // fillwith?: BlockUnit,
        seed?: string | number,
        connectTo: NestedObject_partial<string, Transfer> & {
            enterance: NestedObject_partial<string, Transfer>;
            exits: NestedObject_partial<string, Transfer>;
            floorTo: NestedObject_partial<string, Transfer> & {
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
        let up = new FloorTransfer("FromPrevFloor");
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
    covers: NestedObject_partial<string, (Character & Buildiing & Item)[]> & {
        characters: Character[];
        buildings: Buildiing[];
        item: Item[];
    } = {
        characters: [],
        buildings: [],
        item: [],
    };
    clear(targets: string) {}
}
