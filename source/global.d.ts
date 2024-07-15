const version = "0.0.0";
const baseurl = "https://github.com/cinast/game/blob/main/";

type K = string | number | symbol;
type k = K | bigint;

/**
 * replace by undefine so params use default values
 */
const _ = undefined;

// sys
interface gameNavigater {
    file: {
        id: string,
        /**
         * reset every ${{time}} mins
         */
        hasSaved:boolean,
    };
}


interface gameFile 