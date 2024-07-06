import { isBlock } from "typescript";
import { Character } from "./character";
import { randID } from "./utils/utils";
import { basicObject } from "./basic";

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

export class BlockUnit extends basicObject {}
