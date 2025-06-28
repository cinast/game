import { clamp, uuid } from "@src/utils/utils";

import { NestedObject, NestedObject_partial } from "@src/utils/types";
import { Event, gameBasicObject } from "@router/gamecore";
import { globalItemCollection } from "@src/router/sys/syscore";
import { propRules } from "@src/utils/propRules";

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
    eventList: NestedObject_partial<string, Event | Event[]> & {
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

    @propRules.noOver("stackLimit")
    @propRules.noZero
    number: number = 1;
    stackLimit: number = 10;

    static random = globalItemCollection;

    /**
     *
     * @param sameItem
     * @param numbers
     */
    stackOn(sameItem: Item, numbers: typeof this.number = sameItem.number): typeof this.number | false {
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

            // Calculate overflow
            const newNumber = this.number + numbers; // 叠加后的数量
            const overflow = Math.max(0, newNumber - this.stackLimit); // 计算溢出

            // Update this item's number
            this.number = Math.min(newNumber, this.stackLimit); // 确保不超过堆叠限制

            // Decrease sameItem's number
            sameItem.number -= numbers;

            // If sameItem's number is or under 0, remove it
            if (sameItem.number <= 0) {
                sameItem.delete();
            }

            // Return the overflows
            return overflow; // 返回溢出数量
        } else return false;
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
