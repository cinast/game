import { uuid } from "@src/utils/utils";
import { NestedMap, NestedObject, NestedObject_partial } from "@src/utils/types";

import { gameBasicObject } from "@src/core/basic";
import { Character } from "@src/core/Characters";

import { Item } from "./item";
import { Event, Interval } from "@src/core/events";
import { Building as Building, FloorTransfer, Transfer } from "@src/core/buildings";
import { PlayerCharacter, World } from "@src/router/gamecore";

export class Scene {
    id: string = `Scene#${uuid.v4()}`;
    type: string = "";
    name: string = "";
    tag: string[] = [];
    atWorld: World | undefined | null;
    Index = 0;
    Characters: Map<K, Character> = new Map();

    spawn(entity: Character | PlayerCharacter, atTransfer: Transfer) {
        atTransfer.spawn(entity);
    }

    scale: {
        col: number;
        row: number;
    } = {
        col: 20,
        row: 20,
    };

    content: BlockUnit[][] = [];
    refresh() {
        this.Characters.forEach;
    }

    /**
     * gets in or goes to, allow custom transfers groups `{a:(b{c:tran}})`
     */
    transfers: NestedObject<K, NestedMap<K, Partial<Transfer>>> & {
        /**
         * where u get in
         */
        entrances: Map<K, Transfer>;
        /**
         * get out of here
         */
        exits: Map<K, Transfer>;
    } = {
        entrances: new Map(),
        exits: new Map(),
    };

    connects: NestedObject<K, Map<K, Partial<Scene>>> & {
        /**
         * get entrances that to up or down floor. \
         * In some cases, they may appear at `entrances`, `exit` and here at meantime
         */
        floorTo: NestedObject<K, Map<K, Partial<Floor>>> & {
            next: Map<K, Partial<Floor>>;
            prev: Map<K, Partial<Floor>>;
        };
    } = {
        floorTo: {
            next: new Map(),
            prev: new Map(),
        },
    };

    /**
     * from this floor to target floor
     */
    connectWith(target: Scene, isbidirectional: boolean = true) {
        if (target instanceof Floor) {
            // this
            let ext = this.transfers.exits.get(target.id) as Transfer;
            ext = ext ?? new Transfer("ToNextFloor");

            // tar
            let ent = target.transfers.entrances.get(this.id) as Transfer;
            ent = ent ?? new Transfer("FromPrevFloor");

            ext.connect(ent, true);
        }
    }

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

    constructor(name: string = `${uuid.v4()}`) {
        this.name = name;
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
     * if not Map it, default is 20*20
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

    /**
     * gets in or goes to, allow custom transfers groups `{a:(b{c:tran}})`
     */
    transfers: NestedObject<K, NestedMap<K, Partial<Transfer>>> & {
        /**
         * where u get in
         */
        entrances: Map<K, Transfer>;
        /**
         * get out of here
         */
        exits: Map<K, Transfer>;
    } = {
        entrances: new Map().set("ToNextFloor", {}),
        exits: new Map().set("FromPrevFloor", {}),
    };

    connects: NestedObject<K, Map<K, Partial<Scene>>> & {
        /**
         * get entrance that to up or down floor. \
         * In some cases, they may appear at `entrance`, `exit` and here at meantime
         */
        floorTo: NestedObject<K, Map<K, Partial<Floor>>> & {
            next: Map<K, Partial<Floor>>;
            prev: Map<K, Partial<Floor>>;
        };
    } = {
        floorTo: {
            next: new Map(),
            prev: new Map(),
        },
    };

    /**
     * from this floor to target floor
     */
    connectWith(tarFloor: Floor, isbidirectional: boolean = true) {
        // this
        let from = this.transfers.exits;
        let exit = new Transfer("ToNextFloor");
        from;

        // transfers
        let to = tarFloor.transfers.entrances;
        let enter = new Transfer("FromPrevFloor");
    }

    constructor(
        height: number,
        width: number,
        // fillwith?: BlockUnit,
        seed?: string | number
    ) {
        super("");

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
    covers: NestedObject<string, (Character | Building | Item)[]> & {
        characters: Character[];
        buildings: Building[];
        item: Item[];
    } = {
        characters: [],
        buildings: [],
        item: [],
    };
    clear(targets: string) {}
}
