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
    addCharacter(...Character: Character[]) {
        Character.forEach((c) => {
            this.Characters = { ...this.Characters, [c.name]: c };
        });
    }
    remove() {}
}

type BlockCollection = BlockUnit | Ground;

/**
 *  basic unit of block
 */
export class BlockUnit extends gameBasicObject {
    passable: boolean = true;
    laysOn: BlockCollection | undefined;
    covers: {
        blocks: BlockUnit[];
        chars: Character[];
        items: Item[];
    } = {
        blocks: [],
        chars: [],
        items: [],
    };
}

// basic typed block group

/**
 *  blocks under or is ground
 */
export class Ground extends BlockUnit {
    laysOn = "Ground";
}

/**
 *  blocks on Land
 */
export class Land extends BlockUnit {}

/**
 *  blocks in | over air
 */
export class Air extends BlockUnit {}
