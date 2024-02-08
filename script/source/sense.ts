import { character } from "./character";

class sense{
    readonly id: string =  randID();;
    readonly BaseType: string = "";
    type: string = "";
    tag: string[] = [];
    Idnex = 0;
    characters: Record<string, character> = {};
    addCharacter(...character: character[]) {
        character.forEach((c) => {
            this.characters = { ...this.characters, [c.name]: c };
        });
    }
    remove() {}
}