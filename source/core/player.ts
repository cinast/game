import { char_ability, Character, clonedCharacter } from "@src/core/character";

class Player extends Character {
    name: string = "";
    abilty: char_ability = {
        agile: 1,
        movespeed: 1.0,
        wisdom: 0,
        health: 0,
        attack: 0,
        defense: 0,
    };
}