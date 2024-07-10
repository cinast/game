import { Character } from "./character";
import { randID } from "./utils/utils";
import { gameBasicObject } from "./basic";
import { Item } from "./item";

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
    connectTo: Record<k,senseCollection>;
    addCharacter(...Character: Character[]) {
        Character.forEach((c) => {
            this.Characters = { ...this.Characters, [c.name]: c };
        });
    }
    remove() {}

    constructor(name: string = `${randID()}`, connectTo?: Record<k,senseCollection & >) {
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
    content: BlockUnit[][] = [[]];
    constructor(
        height: bigint,
        width: bigint,
        // fillwith?: BlockCollection,
        seed?: string | number,
        connectTo?: Record<k,senseCollection>
    ) {
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
        this.connectTo = connectTo
    }
}

/**
 *  basic unit of block
 */
export class BlockUnit extends gameBasicObject {
    covers: (Character | Item)[] = [];
    clear(targets: string) {}
}