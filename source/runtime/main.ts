console.log("-main-");

import { assets } from "@runtime/enter";
import { randBint, randID, randint } from "@router/runtime";
import { BlockUnit, Character, Floor, Interval, Item, PlayerCharacter, Transfer, World } from "@router/gamecore";
import { Event } from "@router/gamecore";
import { gameNavigator, leveledInfoProvision as info } from "@router/sys/syscore";
import { randConnectedFloors } from "@src/utils/floor";

// let rc = new Worker("./rander");

const globalWorld = new World();

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
                block.covers.buildings.some((i) => !i.passable)
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

    // globalWorld.
}

// on gamming
// *test*
gameNavigator.gamming.players = [
    {
        // 我想试毒（）
        name: "cosider",
        id: "0a951",
        status: {
            onplay: {
                characters: [
                    Object.assign(new PlayerCharacter(), {
                        atScene: globalWorld.scene[0],
                    }),
                ],
                isOnTrun: false,
                nextTick: 0,
            },
        },
    },
];

/**
 * 语义化探索中
 */
let playerList: typeof gameNavigator.gamming.players = gameNavigator.gamming.players;

// 小小模版
// 先做逻辑
let tickList = globalWorld.tickTimerList;
let taskStruck = globalWorld.taskStruck;
while (!gameNavigator.gamming.isPaused) {
    // so next time [0] is comming task
    tickList.sort((a, b) => a.nextTickAt - b.nextTickAt);

    //jump to
    if (globalWorld.tickTimerList[0]?.nextTickAt != globalWorld.tick) globalWorld.tick = globalWorld.tickTimerList[0].nextTickAt;

    //get list of things need to do
    let list = tickList.slice(-1, tickList.findIndex((f, i) => f.nextTickAt > globalWorld.tick) - 1);

    list.forEach((thing, i) => {
        globalWorld.tickTimerList[i].body.triged = true;

        const body = thing.body;
        globalWorld.taskStruck.push(body.callback);
        if (body instanceof Interval) thing.nextTickAt += body.delay as number;
    });

    while (taskStruck.length > 0) {
        globalWorld.tickTimerList.shift();

        let task = taskStruck.shift();
        // task?.call()
    }
}
