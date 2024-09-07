import { Character, Item, PlayerCharacter, World } from "@router/gamecore";
import { gameFile, gamingInfoProvision, leveledInfoProvision as info } from "@src/router/sys/syscore";

/**
 * @author cinast
 * global logics of how to build and run and ...
 */

/**
 * the who can tell you about the infos of this game \
 * u can get gaming status, gaming file configure (lib used, file saved, etc.)
 */
export declare const gameNavigator: {
    gaming: {
        thisWorld: World;
        isPaused: boolean;
        timer: {
            start: number;
            end: number | null;
            ticks: number;
            isPaused: boolean;
        };

        /**
         * index of players
         */
        turnToWho: number;

        players: (info.PlayerInfoL1 & gamingInfoProvision)[];
        /**
         * & {
            addCharacters: (...characters: (Character | PlayerCharacter)[]) => void;
        };
         */
    };
    sys: {
        file: gameFile;
        lib: {
            Default: lib;
            [key: string | number]: lib;
        };
    };
};

export interface lib {}

/**
 * get sth from loaded sets of items
 */
export declare const globalItemCollection: (
    sort?:
        | {
              tag: string | number;
          }
        | string
        | number
) => Item[] | Item;
