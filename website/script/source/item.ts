import { gameBasicObject } from "./basic";
import { eventObjet } from "./events";

export class Item extends gameBasicObject {
    name: string = "";
    description: string = "";
    weight: number = 0.0;
    isUsable: boolean = true;
    effect: Record<k, eventObjet> = {
        onkeep: new eventObjet("onkeep", () => {}),
        onhold: new eventObjet("onhold", () => {}),
        onuse: new eventObjet("onhold", () => {}),
    };
    constructor(
        name: string,
        description: string,
        weight: number,
        effect: Record<k, eventObjet>,
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
