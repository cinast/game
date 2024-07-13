const version = "0.0.0";
const baseurl = "https://github.com/cinast/game/blob/main/";

type k = string | number | symbol;
type K = k | bigint;

const gobalGame: {
    Floors: Floor[];
    currentScene: Floor;
};

/**
 * replace by undefine so params use default values
 */
const _ = undefined;
