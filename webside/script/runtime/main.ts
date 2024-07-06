console.log("-main-");

import { assets } from "./enter";
import { World } from "../source/world";
import { BlockUnit } from "../source/sense";

let rc = new Worker("./rander");

const globalWorld = new World();
function newFloor(seed: string | number, height: number, width: number) {
    let floor: BlockUnit[][] = [[]];
    for (let i = 0; i < height; i++) {
        floor.push([]);
        for (let j = 0; j < width; i++) {
            floor[i].push(new BlockUnit());
        }
    }

    Object.assign(globalWorld.sense, floor);
}
//ok
/*  我记得有一种地图生成算法叫做波函数坍缩算法，不是让你真的模拟波函数，
    而是模拟波函数的特点，可以的话试试 :D
    */
