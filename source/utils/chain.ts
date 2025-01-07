import { customObject } from "./types";
import { EventChain } from "@src/utils/events";
import { Event } from "@src/utils/events";
export class storyLine {
    name: string = "";
    description: string = "";
    eventsChain: customObject<K, EventChain> = {};
    nextLine: customObject<K, storyLine> = {};
    prevLine: customObject<K, storyLine> = {};
    constructor() {}
}
