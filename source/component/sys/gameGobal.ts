import { Item } from "@src/core/item";

interface gameNavigater {
    gamming: {
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
            Default: lib;
            [key: string | number]: lib;
        };
    };
}

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
