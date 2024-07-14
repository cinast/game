console.log("-main-");

import { assets } from "@runtime/enter";
import { randBint, randID, randint } from "@router/runtime";
import { Floor, Transfer, World } from "@router/gamecore";
import { escapeSelector } from "jquery";

let rc = new Worker("./rander");

const globalWorld = new World();

function randFloor(): Floor {
    return new Floor(randBint(300, 10), randBint(300, 10), randID());
}

/**
 * generate floors list which evry floor have connected each other \
 * last one goes to next one
 */
function randConnectedFloors(
    number: number,
    /**
     * start from 1
     */
    countAt: number = 1
): Floor[] {
    let ls: Floor[] = new Array(number).fill(randFloor());
    ls.map((f, i) => {
        if (i == 0) return;
        if (i < number) {
            f.connectWith(ls[i + 1], true);
            f.connects.floorTo.next = ls[i + 1];
        }
        if (i > 1) {
            f.connects.floorTo.prev = ls[i - 1];
        }
    });
    return ls;
}

let totalfloors = randint(20, 100);

function worldInit() {
    globalWorld.scene.push(...randConnectedFloors(totalfloors));
}
