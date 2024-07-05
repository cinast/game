import { PageTurnVisitable } from "./source/utils/ui";
import { XHRrequest, parse } from "./source/utils/utils";

// Assets manager
interface Asset {
    content: any;
    type: string;
    loaded: boolean;
}

interface AssetListItem {
    name: string;
    type: string;
    url: string;
    loadsucceed: boolean;
}

interface LoadFailedItem {
    name: string;
    reason: Error | string | any;
    body: AssetListItem;
}

const assets: Record<string, Asset> = {};
const assetsList: AssetListItem[] = [];
const loadFailedList: LoadFailedItem[] = [];

async function loadAssets() {
    try {
        const response = await fetch("../assets/assets.json");
        const assetsConfig = await response.json();
        assetsList.push(...assetsConfig);
    } catch (error) {
        console.error("Failed to load assets config:", error);
        return;
    }

    PageTurnVisitable("loading", true);

    let rescounter = 0;

    for (const item of assetsList) {
        fetch(item.url, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
        })
            .then((response) => response.blob())
            .then((blob) => {
                assets[item.name] = parse[item.type](blob);
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

async function startMainScript() {
    await loadAssets();
    const main = new Worker("./runtime/main.ts");
    // Send data to main script
    main.postMessage({ assets });
}

startMainScript();
