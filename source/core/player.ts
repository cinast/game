import { char_ability, Character, clonedCharacter } from "@src/core/character";
export class PlayerCharacter extends Character {
    name: string = "";
    abilty: char_ability = {
        agile: 1,
        speed: 1.0,
        wisdom: 0,
        health: 0,
        attack: 0,
        defense: 0,
    };
    /**
     * playerid (template)
     */
    controlBy: string = "";
}
