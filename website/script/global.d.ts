const version = "0.0.0";
const baseurl = "https://github.com/cinast/game/blob/main/";

type k = string | number | symbol;
type K = k | bigint;
type objectCollection = Character | clonedCharacter;
type sceneCollection = Scene | specialScene;
type gameCollection = omit<objectCollection, senseCollection>;
type BlockCollection = BlockUnit;
