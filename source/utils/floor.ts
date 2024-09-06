import { Floor } from "@src/router/gamecore";
import { uuid, randint } from "@src/router/runtime";

export function randFloor(): Floor {
    return new Floor(randint(300, 10), randint(300, 10), uuid.v4());
}

/**
 * generate floors list which every floor have connected each other \
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
            f.Index = countAt;
            return;
        }
        if (i < number) {
            f.connectWith(ls[i + 1], true);
            f.connects.floorTo.next.set(ls[i + 1].id, ls[i + 1]);
        }
        if (i > 0) {
            f.Index = countAt + i;
            f.connects.floorTo.prev.set(ls[i - 1].id, ls[i - 1]);
        }
    });
    return ls;
}

/**
 * generate floors list which every floor have connected each other \
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
            f.Index = countAt;
            return;
        }
        if (i < number) {
            f.connectWith(ls[i + 1], true);
            f.connects.floorTo.next.set(ls[i + 1].id, ls[i + 1]);
        }
        if (i > 0) {
            f.Index = countAt + i;
            f.connects.floorTo.prev.set(ls[i - 1].id, ls[i - 1]);
        }
    });
    return ls;
}
