/**         ---first draft----
 *
 *
 *       xx
 *     x  xx         xxxx
 *         xxx     xx    x
 *          xxx   xx
 *           xxx xx      dungeon
 *            xxxx
 *           xx  xxx
 *      x  xx      xxx
 *       xx           xx
 *
 * @project xxxx dungeon
 * @version 1.0.0
 * @author cinast(*cosider*)  paskaw(*beams123*)
 *
 */

import _ from "lodash";

import { loadAssets } from "@src/component/sys/assetsLoader";

// import { PageTurnVisitable } from "./ui";

async function startMainScript() {
    await loadAssets();
    const main = new Worker("@runtime/");
    // Send data to main script
    // main.postMessage({ assets });
}

startMainScript();

function component() {
    const element = document.createElement("div");

    // lodash 现在使用 import 引入
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
}

document.body.appendChild(component());
