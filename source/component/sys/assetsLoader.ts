import { NestedObject, parse } from "@src/utils/utils";
import assets from "@assets/list.json";

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
    body: (typeof assets)[number];
}

export const loadFailedList: LoadErroredItem[] = [];
export const assetsList: Record<string, AssetListItem> = {};

export async function loadAssets() {
    assets.forEach(async (item) => {
        const promise = import(item.url);

        promise.catch((err) => {
            loadFailedList.push({
                name: item.name,
                reason: err,
                body: item,
            });
        });
        promise.then((resource) => {
            assetsList[item.url] = resource;
        });
    });
}
