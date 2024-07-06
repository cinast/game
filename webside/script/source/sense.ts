import { Character } from "./character";
import { randID } from "./utils/utils";

export class Sense {
    readonly id: string = randID();
    readonly BaseType: string = "";
    type: string = "";
    name: string = "";
    tag: string[] = [];
    Idnex = 0;
    Characters: Record<string, Character> = {};
    addCharacter(...Character: Character[]) {
        Character.forEach((c) => {
            this.Characters = { ...this.Characters, [c.name]: c };
        });
    }
    remove() {}
}
