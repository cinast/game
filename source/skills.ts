import { Chain, Node } from "./utils/chain";
import { Event } from "./utils/events";
import { propRules } from "./utils/propRules";
import { uuid } from "./utils/utils";

export class Skill extends Node {
    name: string = "";
    id: string = uuid.v4();
    tag: Set<string> = new Set();
    condition: Event | null = null;
    effects: Event | null = null;
    unlock = (...args: any[]): any =>
        this.condition?.callback(...args) ? this.effects?.callback(...args) : new Error("conditions unsatisfied");
    unlocked: boolean = false;

    constructor(parentChain?: SkillTree | undefined) {
        super(parentChain);
    }
}

export class SkillTree extends Chain {
    name: string = "";
    id: string = uuid.v4();
    tag: Set<string> = new Set();

    constructor() {
        super();
    }
}
new SkillTree();
