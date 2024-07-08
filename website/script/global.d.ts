declare const version = "0.0.0";
declare const baseurl = "https://github.com/cinast/game/blob/main/";

declare type k = string | number | symbol;
declare type K = k | bigint;
declare type objectCollection = Character | clonedCharacter;
declare type senseCollection = sense;
declare type gameCollection = omit<objectCollection, senseCollection>;
declare type BlockCollection = BlockUnit | Ground;
