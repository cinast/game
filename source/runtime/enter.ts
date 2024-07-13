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

// import { PageTurnVisitable } from "./ui";
import { XHRrequest, parse } from "@src/utils/utils";

// Assets manager
export interface AssetListItem {
    content: any;
    name: string;
    loaded: boolean;
    type: string;
    url: string;
    loadsucceed: boolean;
}

export interface LoadErroredItem {
    name: string;
    reason: Error | string | any;
    body:
        | AssetListItem
        | AssetListItem[]
        | Record<K, AssetListItem>
        | Record<K, AssetListItem[]>;
}

export const assets: Record<string, AssetListItem> = {};
export const assetsList: AssetListItem[] = [];
export const loadFailedList: LoadErroredItem[] = [];

async function loadAssets() {
    try {
        const response = await fetch("../assets/assets.json");
        const assetsConfig = await response.json();
        assetsList.push(...assetsConfig);
    } catch (error) {
        console.error("Failed to load assets config:", error);
        return;
    }

    // PageTurnVisitable("loading", true);

    let rescounter = 0;

    for (const item of assetsList) {
        if (assets[item.name] && assets[item.name].loaded) {
            loadFailedList.push({
                name: item.name,
                reason: Error(
                    "this object crashed with the same name of item of already loaded"
                ),
                body: {
                    new: item,
                    loaded: assets[item.name],
                },
            });
        } else {
            fetch(item.url)
                .then((response) => response.blob())
                .then((blob) => {
                    assets[item.name] = parse[item.type](blob);
                    assets[item.name].loaded = true;
                })
                .catch((error) => {
                    loadFailedList.push({
                        name: item.name,
                        reason: error,
                        body: item,
                    });
                })
                .finally(() => {
                    rescounter++;
                });
        }
    }
}
async function startMainScript() {
    await loadAssets();
    const main = new Worker("./runtime/main.ts");
    // Send data to main script
    // main.postMessage({ assets });
}

startMainScript();
