import { Floor } from "@src/router/gamecore";
import { randID, randint } from "@src/router/runtime";

export function randFloor(): Floor {
    return new Floor(randint(300, 10), randint(300, 10), randID());
}

/**
 * generate floors list which evry floor have connected each other \
 * last one goes to next one
 */
export function randConnectedFloors(
    number: number,
    /**
     * start from 1
     */
    countAt: number = 1
): Floor[] {
    let ls: Floor[] = new Array(number);

    ls.map(() => randFloor());

    ls.map((f, i) => {
        if (i == 0) {
            f.Idnex = countAt;
            return;
        }
        if (i < number) {
            f.connectWith(ls[i + 1], true);
            f.connects.floorTo.next = ls[i + 1];
        }
        if (i > 0) {
            f.Idnex = countAt + i;
            f.connects.floorTo.prev = ls[i - 1];
        }
    });
    return ls;
}

/**
 * generate floors list which evry floor have connected each other \
 * last one goes to next one
 */
export function connectedFloors(
    number: number,
    /**
     * start from 1
     */
    countAt: number = 1
): Floor[] {
    let ls: Floor[] = new Array(number).fill(new Floor(20, 20));
    ls.map((f, i) => {
        if (i == 0) {
            f.Idnex = countAt;
            return;
        }
        if (i < number) {
            f.connectWith(ls[i + 1], true);
            f.connects.floorTo.next = ls[i + 1];
        }
        if (i > 0) {
            f.Idnex = countAt + i;
            f.connects.floorTo.prev = ls[i - 1];
        }
    });
    return ls;
}
