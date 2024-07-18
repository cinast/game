import { Item } from "@src/core/item";
import { leveledInfoProvision as pif } from "@src-sys/account";

export declare const gameNavigator: {
    gamming: {
        players: pif.Pl(ayerInfoL1 & )[];
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
