console.log("-main-");

import { assets } from "./enter";
import { World } from "../source/world";
import { BlockUnit, Floor, Scene } from "../source/scene";
import { randBint, randID, randint } from "../router/runtime";
import { ThisGame } from "../source/utils/gameManage";

let rc = new Worker("./rander");

const globalWorld = new World();

function randFloor(): Floor {
    return new Floor(randBint(300, 10), randBint(300, 10), randID());
}

let totalfloors = randint(20, 100);

function worldInit() {
    for (let i = 0; i < totalfloors; i++) {
        let floor = randFloor();
        floor.name = "floor" + i;
        floor.connectTo;
        globalWorld.scene.push();
    }
}
