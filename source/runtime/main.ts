console.log("-main-");

import "pixi";

import { uuid, randint } from "@router/runtime";
import { gameNavigator } from "@router/sys/syscore";

import { Character, Interval, Item, PlayerCharacter, World } from "@router/gamecore";
import { randConnectedFloors } from "@src/utils/floor";

// let rc = new Worker("./render");

const globalWorld = new World();

let totalfloors = randint(20, 100);

function worldInit() {
    // generate floors
    randConnectedFloors(totalfloors).forEach((f, i) => globalWorld.scene.set(`floor${i}`, f));

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
            } else {
                let item = Item.random(uuid.v4());
                block.covers.item.push(...(Array.isArray(item) ? item : [item]));
            }
        }
    });
}

// on gaming
// *test*
gameNavigator.gaming.players = [
    {
        // 我想试毒（）
        name: "cosider",
        id: "0a951",
        status: {
            onplay: {
                characters: [new PlayerCharacter()],
                isOnTurn: false,
                nextTick: 0,
            },
        },
    },
];

/**
 * 语义化探索中
 */
let playerList: typeof gameNavigator.gaming.players = gameNavigator.gaming.players;

// 小小模版
// 先做逻辑
let tickList = globalWorld.tickTimerList;
let taskStruck = globalWorld.taskStruck;
while (!gameNavigator.gaming.isPaused) {
    // so next time [0] is coming task
    tickList.sort((a, b) => a.nextTickAt - b.nextTickAt);

    //jump to
    if (globalWorld.tickTimerList[0]?.nextTickAt != globalWorld.tick) globalWorld.tick = globalWorld.tickTimerList[0].nextTickAt;

    //get list of things need to do
    let index = tickList.findIndex((f, i) => f.nextTickAt > globalWorld.tick);

    for (let i = 0; i < tickList.length; i++) {
        if (i > index) break;

        const thing = tickList[i];
        const body = thing.body;
        body.trigged = true;

        // taskStruck.push(body.callback);

        let nextTick = body.callback.call();
        if (nextTick) {
            thing.nextTickAt += nextTick;
        } else {
            tickList.splice(i, 1);
            continue;
        }
        if (body instanceof Interval) thing.nextTickAt += body.delay as number;
    }

    // while (taskStruck.length > 0) {
    //     // 矢
    //     const handle = taskStruck.shift() as typeof taskStruck[number];
    // }
}
