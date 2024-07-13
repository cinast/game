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

function randConnectedFloors(number:number): Floor[] {
    let floorsets:Floor[] = []
    function recurseLinking(next:Floor) {
        let floor = randFloor();
        floor.name = "floor" + i;
        floor.transfers;
}
}

let totalfloors = randint(20, 100);

function worldInit() {
    function (params:type) {
            let floor = randFloor();
            floor.name = "floor" + i;
            floor.transfers;
            globalWorld.scene.push();
    }
}
