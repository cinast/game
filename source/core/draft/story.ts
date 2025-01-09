import { uuid } from "@src/utils/utils";

import { customObject, K } from "@src/utils/types";

export class storyLine {
    id: string = `#${uuid.v4()}`;
    name: string = "";
    description: string = "";
    eventsChain: customObject<K, StoryStage> = {};
    constructor() {}
}

export class StoryStage {
    id: string = `#${uuid.v4()}`;
    name: string = "";
    description: string = "";
}

export class envetGroup {
    id: string = `#${uuid.v4()}`;
    name: string = "";
    description: string = "";
}

// stroyline - stroyStage - envetGroup - envet
