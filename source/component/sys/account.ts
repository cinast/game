export interface PlayerAccountInfo {
    readonly name: string;
    readonly id: string;
    readonly profile: {
        bio: string;
        avatar: {
            url: string;
        };
    };
    status: {
        online: boolean;
    };
}

class Account {}