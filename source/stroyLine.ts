import { Chain, Node } from "./utils/chain";
import { Event } from "./utils/events";
import { propRules } from "./utils/propRules";
import { uuid } from "./utils/utils";

export class StoryNode extends Node {
    name: string = "";
    id: string = uuid.v4();
    tag: Set<string> = new Set();
    condition: Event | null = null;
    effects: Event | null = null;
    unlock = (...args: any[]): any => {
        if (this.condition?.callback(...args)) {
            this.unlocked = true;
            return this.effects?.callback(...args);
        } else return new Error("conditions unsatisfied");
    };
    unlocked: boolean = false;

    constructor(parentChain?: StoryTree | undefined) {
        super(parentChain);
    }
}

export class StoryTree extends Chain<StoryNode> {
    name: string = "";
    id: string = uuid.v4();
    tag: Set<string> = new Set();

    constructor() {
        super();
    }
}
