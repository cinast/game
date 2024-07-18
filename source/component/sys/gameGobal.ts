import { Item } from "@src/core/item";
import { PlayerInfoL1 } from "@src-sys/account";

export declare const gameNavigator: {
    gamming: {
        players: PlayerInfoL1[];
        file: {
            /**
             * file id
             */
            current: string;
            [key: string]: gameFile;
        };
    };
    sys: {
        lib: {
            // Default: lib | undefined;
            [key: string | number]: lib;
        };
    };
};

interface lib {}

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
