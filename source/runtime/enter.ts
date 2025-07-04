/**         ---first draft----, *
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
 * @author cinast(*cosider*) paskaw(*beams123*) Stexley(*pxcookie*)
 *
 */

import _ from "lodash";

import { loadAssets } from "@sys/component/sys/assetsLoader";

// import { PageTurnVisitable } from "./ui";
//开个线程启动主函数，这里是initial
//专门预处理页面用的
async function startMainScript() {
    await loadAssets();
    const main = new Worker("@runtime/main.ts");
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
