import { gameBasicObject } from "./basic";
import { eventObject } from "./events";
import { clamp, NestedObject, randID } from "./utils/utils";

/**
 *  Anything can be interact or be used, included  equipment, food, books, etc.
 *  but `Characters`, `buildiings` or *likes* are **not in list**
 */
export class Item extends gameBasicObject {
    id: string = "item#" + randID();
    name: string = randID();
    description: string = "";
    weight: number = 0.0;
    isUsable: boolean = true;
    eventList = {
        effect: {
            onkeep: new eventObject("onkeep", () => {}),
            onhold: new eventObject("onhold", () => {}),
            onuse: new eventObject("onuse", () => {}),
        },
    };

    number: number = 1;
    stackLimit: number = 10;

    stackOn(sameItem: Item, numbers: number = sameItem.number) {
        // same type of item
        if (this.id === sameItem.id) {
            // opinion setted?
            if (numbers) {
                numbers = clamp(
                    numbers,
                    0,
                    Math.min(sameItem.number, this.stackLimit - this.number)
                );
            } else {
                // if not overflow, add sameItem's number to this item's number
                if (this.number < this.stackLimit) {
                    numbers = clamp(
                        sameItem.number,
                        0,
                        this.stackLimit - this.number
                    );
                }
            }
            // update this item's number
            this.number += numbers;
            // decrease sameItem's number
            sameItem.number -= numbers;

            // if sameItem's number is or under 0, remove it
            if (sameItem.number === 0) {
                sameItem.delete();
            }
        }
    }
    stackOff(numbers: number) {
        this.number -= numbers;
        let stackoffed = { ...this };
        stackoffed.number -= numbers;
        return stackoffed;
    }

    delete() {
        // h e l p    m e
    }

    constructor(
        name: string,
        description: string,
        weight: number,
        effect: NestedObject<string, eventObject>,
        useable: boolean = true
    ) {
        super();
        this.name = name;
        this.description = description;
        this.weight = weight;
        this.isUsable = useable;
        this.eventList.effect = effect;
    }
}
