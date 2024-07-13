const version = "0.0.0";
const baseurl = "https://github.com/cinast/game/blob/main/";

type K = string | number | symbol;
type k = K | bigint;

const gobalGame: {
    Floors: Floor[];
    currentScene: Floor;
};

/**
 * replace by undefine so params use default values
 */
const _ = undefined;
