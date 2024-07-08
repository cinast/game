import { Character } from "./character";
import { randID } from "./utils/utils";
import { gameBasicObject } from "./basic";
import { Item } from "./item";

export class Sense {
    readonly id: string = randID();
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

    addCharacter(...Character: Character[]) {
        Character.forEach((c) => {
            this.Characters = { ...this.Characters, [c.name]: c };
        });
    }
    remove() {}

    constructor() {}
}

export class floor extends Sense {
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
        seed?: string | number
    ) {
        super();
        this.scale.row = width;
        this.scale.col = height;
        if (!seed) {
            for (let i = 0; i < height; i++) {
                this.content.push([]);
                for (let j = 0; j < width; i++) {
                    this.content[i].push(new BlockUnit(`${i},${j}`));
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
    covers: (Character | Item)[] = [];
    clear(targets: string) {}
}
