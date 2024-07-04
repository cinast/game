import { character } from "./character";
import { randID } from "./utils/utils";

class sense {
    readonly id: string = randID();;
    readonly BaseType: string = "";
    type: string = "";
    name: string = ""
    tag: string[] = [];
    Idnex = 0;
    characters: Record<string, character> = {};
    addCharacter(...character: character[]) {
        character.forEach((c) => {
            this.characters = { ...this.characters, [c.name]: c };
        });
    }
    remove() { }
}