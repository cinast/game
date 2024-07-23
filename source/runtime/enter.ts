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

import { loadAssets } from "@src/component/sys/assetsLoader";

// import { PageTurnVisitable } from "./ui";

async function startMainScript() {
    await loadAssets();
    const main = new Worker("@runtime/");
    // Send data to main script
    // main.postMessage({ assets });
}

startMainScript();
