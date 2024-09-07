export enum alive {
    alive = 0,
    dying = -1,
    dead = -2,
    not_exist = -3,
}

export interface char_ability {
    agile: number;
    speed: number;
    wisdom: number;
    attack: number;
    defense: number;
    [key: string]: K | bigint;
}

export const default_char_ability: char_ability = {
    agile: 0,
    speed: 0,
    wisdom: 0,
    max_health: 0,
    max_magic: 0,
    attack: 0,
    defense: 0,
};
