import { clamp, uuid } from "@src/utils/utils";

import { NestedObject, NestedObject_partial } from "@src/utils/types";
import { globalItemCollection } from "@sys/component/sys/gameGlobal";
import { gameBasicObject } from "@src/core/basic";
import { Event } from "@src/core/logic/events";

/**
 *  Anything can be interact or be used, included  equipment, food, books, etc. \
 *  but `Characters`, `buildings` or *likes* are **not in list**
 */
export class Item extends gameBasicObject {
    id: string = "item#" + uuid.v4();
    name: string = uuid.v4();
    description: string = "";
    weight: number = 0.0;
    isUsable: boolean = true;
    eeventList: NestedObject_partial<string, Event | Event[]> & {
        effect: {
            onkeep: Event;
            onhold: Event;
            onuse: Event;
        };
    } = {
        effect: {
            onkeep: new Event("onkeep", () => {}),
            onhold: new Event("onhold", () => {}),
            onuse: new Event("onuse", () => {}),
        },
    };

    // @propRules.noZero
    // @propRules.noOver(this)
    number: number = 1;
    stackLimit: number = 10;

    static random = globalItemCollection;

    stackOn(sameItem: Item, numbers: number = sameItem.number) {
        // same type of item
        if (this.id === sameItem.id) {
            // opinion has set?
            if (numbers) {
                numbers = clamp(numbers, 0, Math.min(sameItem.number, this.stackLimit - this.number));
            } else {
                // if not overflow, add sameItem's number to this item's number
                if (this.number < this.stackLimit) {
                    numbers = clamp(sameItem.number, 0, this.stackLimit - this.number);
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

    constructor(name: string, description: string, weight: number, effect: NestedObject<string, Event>, useable: boolean = true) {
        super();
        this.name = name;
        this.description = description;
        this.weight = weight;
        this.isUsable = useable;
        Object.assign(this.eventList.effect, effect);
    }
}
