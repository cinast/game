import { Item, World } from "@router/gamecore";
import { gameFile, gammingInfoProvision, leveledInfoProvision as info } from "@src/router/sys/syscore";

/**
 * @author cinast
 * gobal logics of how to build and run and ...
 */

/**
 * the who can tell you about the infos of this game \
 * u can get gamming status, gaming file configure (lib used, file saved, etc.)
 */
export declare const gameNavigator: {
    gamming: {
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

        players: (info.PlayerInfoL1 & gammingInfoProvision)[];
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
export declare const gobalItemCollection: (
    sort?:
        | {
              tag: string | number;
          }
        | string
        | number
) => Item[] | Item;
