import { Character } from "./character";
import {
    attrTreePath,
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

    /**
     * what inside
     */
    content: any;

    /**
     * gets in or goes to, allow custom transfers groups `{a:(b{c:tran}})`
     */
    connectTo: NestedObject_partial<string, Transfer> & {
        /**
         * where u get in
         */
        enterance: NestedObject_and_partialItself<string, Transfer>;
        /**
         * get out of here
         */
        exits: NestedObject_and_partialItself<string, Transfer>;
    } = {
        enterance: {},
        exits: {},
    };

    addTransfer(t: Transfer, at: attrTreePath<typeof this.connectTo>) {}

    /**
     * from target scene to this scene
     *
     * if `enter` either `exit` nothing, funtion will connect them defualtly by transfers witch on  `enterance.~#entrfloor` at `.exit` and `.enterance` \
     * or, connect by trans you input
     * @itemname: `enterance[Tarscene.id]`
     */
    connectWith(
        ...scenes: {
            scene: Scene;
            /**
             * ``
             */
            enterPort?: Transfer;
            exitPort?: Transfer;
            isbidirectional?: boolean;
        }[]
    ) {
        scenes.forEach((i) => {
            if (i.exitPort) {
                // tar -> this
                i.exitPort.connectTo.enter = this;
                this.connectTo.enterance[i.scene.id] = i.exitPort;

                // this -> tar
                if (i.isbidirectional) {
                }
            } else {
                this.connectTo.enterance;
            }
        });
    }

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
         * get enterance that to up or down floor. \
         * In some cases, they may appear at `enteraance`, `exit` and here at meantime
         */
        floorTo: NestedObject_and_partialItself<string, Transfer> & {
            next: Partial<Transfer>;
            prev: Partial<Transfer>;
        };
    } = {
        enterance: {
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
