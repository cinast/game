import { PlayerCharacter, Scene } from "@router/gamecore";

/**
 *  _\*a great info Provision managing method, i think\*_
 *
 * Information Provisioning Module
 *
 * This module provides a hierarchical system for managing player information,
 * with four levels of access control. Each level represents a different
 * level of authority, with higher levels granting more access to sensitive
 * information.
 *
 * - not Really acc
 * - Balancing usage ~
 * @author cinast
 */
export namespace leveledInfoProvision {
    /**
     * Level 1: Basic Information
     *
     * Provides basic information about a player, such as their name and ID.
     * Used in-game and for general purposes.
     */
    export interface PlayerInfoL1 {
        readonly name: string;
        readonly id: string;
    }

    /**
     * Level 2: Public Profile Information
     *
     * Provides more detailed information about a player's public profile, \
     * including their bio and avatar. Used on the game's home page and
     * other public areas.
     */
    export interface PlayerInfoL2 {
        readonly profile: {
            bio: string;
            avatar: {
                url: string;
            };
        };
        status: {
            code: "online" | "offline" | "playing";
        };
    }

    /**
     * Level 3: Semi-Private Information
     *
     * Provides semi-private information about a player, which may be
     * shared with other players or used for game-related purposes.
     */
    export interface PlayerInfoL3 {
        readonly profile: {
            // Add more properties here as needed
        };
    }

    /**
     * Level 4: Private Information (not implemented)
     *
     * Provides highly sensitive or private information about a player.
     * Not implemented in this example, but could be added as needed.
     * @deprecated
     * @why im not perpeared
     */
    export interface PlayerInfoL4 {
        // Add more properties here as needed
    }

    /* what do you think of
     * i know what you want
     */
    // export interface PlayerInfoLFINALL {
    //     readonly profile: {
    //         "你家地址":""
    //          "盒":""
    //     };
    // }
}

export interface gammingInfoProvision {
    status: {
        onplay: {
            characters: (PlayerCharacter & {
                atScene: Scene;
            })[];
            isOnTrun: boolean;
            nextTick: number;
        };
    };
}
