import { gameBasicObject } from "./basic";
import { eventObject } from "./events";

export class Item extends gameBasicObject {
    name: string = "";
    description: string = "";
    weight: number = 0.0;
    isUsable: boolean = true;
    effect: Record<k, eventObject> = {
        onkeep: new eventObject("onkeep", () => {}),
        onhold: new eventObject("onhold", () => {}),
        onuse: new eventObject("onhold", () => {}),
    };
    constructor(
        name: string,
        description: string,
        weight: number,
        effect: Record<k, eventObject>,
        useable: boolean
    ) {
        super();
        this.name = name;
        this.description = description;
        this.weight = weight;
        this.isUsable = useable;
        this.effect = Object.assign(effect);
    }
}
