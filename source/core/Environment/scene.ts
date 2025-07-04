import { Building, Character, theDust, Interval, Item, PlayerCharacter, Transfer, World } from "@src/router/gamecore";
import { customObject, NestedMap, NestedObject, NestedObject_partial } from "@src/utils/types";
import { uuid } from "@src/utils/utils";

export class Scenario {
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
        this.Characters.forEach((chara) => {
            chara.refresh();
        });
    }

    /**
     * gets in or goes to, allow custom transfers groups `{a:(b{c:tran}})`
     */
    transfers: customObject<K, Partial<Transfer>> & {
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

    connects: NestedObject<K, Map<K, Partial<Scenario>>> & {
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
    connectWith(target: Scenario, isbidirectional: boolean = true) {
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

export class specialScene extends Scenario {
    connectWith(...arg: any[]) {
        throw new Error("Method not implemented.");
    }
}

export class Floor extends Scenario {
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
        this.Characters.forEach((chara) => {
            //更正每个character的位置信息
            chara.atScene = this;
            let covers = this.content[chara.x][chara.y].covers;
            for (const i in covers) {
            }
        });
    }

    /**
     * gets in or goes to, allow custom transfers groups `{a:(b{c:tran}})`
     */
    transfers: customObject<K, Partial<Transfer>> & {
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

    connects: NestedObject<K, Map<K, Partial<Scenario>>> & {
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
    connectWith(tarFloor: Floor, isBidirectional: boolean = true) {
        const exitTransfer = new Transfer("ToNextFloor");
        const enterTransfer = new Transfer("FromPrevFloor");

        this.transfers.exits.set(tarFloor.id, exitTransfer);
        tarFloor.transfers.entrances.set(this.id, enterTransfer);

        exitTransfer.connect(enterTransfer, isBidirectional);
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
export class BlockUnit extends theDust {
    covers: Record<string, (Character | Building | Item)[]> & {
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
