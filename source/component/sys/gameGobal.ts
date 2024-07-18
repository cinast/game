import { Item } from "@src/core/item";
import { gammingInfoProvision, leveledInfoProvision as info } from "@src-sys/InfoProvision";

export declare const gameNavigator: {
    gamming: {
        players: (info.PlayerInfoL1 & gammingInfoProvision)[];
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
