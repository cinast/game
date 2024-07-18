console.log("-main-");

import { assets } from "@runtime/enter";
import { randBint, randID, randint } from "@router/runtime";
import { BlockUnit, Character, Floor, Item, Transfer, World } from "@router/gamecore";
import { gameNavigator } from "@router/sys/syscore";
import { PlayerInfoL1 } from "@src/component/sys/account";

// let rc = new Worker("./rander");

const globalWorld = new World();

function randFloor(): Floor {
    return new Floor(randint(300, 10), randint(300, 10), randID());
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
    let ls: Floor[] = new Array(number);

    ls.map(() => randFloor());

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
    // generate floors
    globalWorld.scene = randConnectedFloors(totalfloors);

    // generate details
    globalWorld.scene.forEach((floor) => {
        for (let i = 0; i < randint(500, 50); i++) {
            // pick one randomly
            let block = floor.content[randint(floor.scale.row)][randint(floor.scale.col)];
            if (
                // void block
                block.type == "void" ||
                // if not reachable (i think)
                block.covers.buildings.filter((i) => {
                    if (!i.passable) return i;
                }).length != 0 // has one or more
            )
                continue;
            if (randint(1, 0, "trunc")) {
                let monster = new Character();
                monster.type = "monster";
                block.covers.characters.push(monster);
            }
            if (randint(1, 0, "trunc")) {
                let item = Item.random(randID(16));
                block.covers.item.push(...(Array.isArray(item) ? item : [item]));
            }
        }
    });
}

// on gamming
/**
 * 语义化探索中
 */
let playerList: (PlayerInfoL1 & {})[] = gameNavigator.gamming.players;
