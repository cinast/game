/**
 * @by cinast
 */

/**
 * give basaic infos of players \
 * used on in-gamming, etc.
 */
export interface PlayerInfoL1 {
    readonly name: string;
    readonly id: string;
    readonly profile: {
        bio: string;
        avatar: {
            url: string;
        };
    };
    status: {
        // online: boolean;
        code: "online" | "offline" | "playing";
    };
}

/**
 * more details
 */
export interface PlayerInfoL2 {
    readonly profile: {};
}

/**
 * sth bit praivte, but publicable
 */
export interface PlayerInfoL3 {
    readonly profile: {};
}

/**
 * what do you think of
 * i know what you want
 */
// export interface PlayerInfoL4 {
//     readonly profile: {
//         "你家地址":""
//          "盒":""
//     };
// }
