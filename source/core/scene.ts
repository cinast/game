import { uuid } from "@src/utils/utils";
import { NestedObject_partial } from "@src/utils/types";

import { gameBasicObject } from "@src/core/basic";
import { Character } from "@src/core/character";

import { Item } from "./item";
import { Event, Interval } from "@src/core/events";
import { Buildiing, FloorTransfer, Transfer } from "@src/core/buildings";

export class Scene {
    id: string = `Scene#${uuid.v4()}`;
    type: string = "";
    name: string = "";
    tag: string[] = [];
    Idnex = 0;
    Characters: Set<Character> = new Set();
    scale: {
        col: number;
        row: number;
    } = {
        col: 0,
        row: 0,
    };

    /**
     * what inside
     * @implements
     */
    content: any;
    /**
     * @implements
     */
    refresh() {}

    /**
     * @implements
     */
    connectWith(...arg: any[]): void {
        throw new Error("Method must be implemented by subclass");
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

    constructor(
        name: string = `${uuid.v4()}`,
        connectTo: NestedObject_partial<string, Transfer> & {
            enterance: NestedObject_partial<string, Transfer>;
            exits: NestedObject_partial<string, Transfer>;
        }
    ) {
        this.name = name;
        this.transfers = connectTo;
    }
}

export class specialScene extends Scene {
    connectWith(...arg: any[]) {
        throw new Error("Method not implemented.");
    }
}

export class Floor extends Scene {
    id: string = `Floor#${uuid.v4()}`;
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
    content: BlockUnit[][];
    refresh() {
        this.Characters.forEach;
    }

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

        width = width > 0 ? width : 20;
        height = height > 0 ? height : 20;
        this.scale.row = width;
        this.scale.col = height;
        this.content = Object.assign(new Array(width).fill(new Array(height).fill(new BlockUnit())) as BlockUnit[][], {
            refresh() {},
        });

        if (seed) {
        }
    }
}
/**
 *  base of every block of map
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
