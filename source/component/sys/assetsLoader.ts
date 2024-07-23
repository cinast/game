import { NestedObject, parse } from "@src/utils/utils";
import totalList from "@assets/list.json";

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
    body: {
        name: string;
        id: string;
        type: string | "assets-group";
        path: string;
    };
}

export const loadFailedList: LoadErroredItem[] = [];
export const assetsList: NestedObject<string, Array<AssetListItem>> = {
    img: {
        ui: [],
        backgroud: [],
    },
    sound: {
        fx: [],
        misc: [],
    },
};

export async function loadAssets() {
    for (const item in totalList) {
        //ts 的矢山写法（怒）
        const tar = totalList[item as keyof typeof totalList];
        const promise = import(tar.path);

        promise.catch((err) => {
            loadFailedList.push({
                name: item,
                body: {
                    name: item,
                    id: tar.id,
                    type: "assetsgroup",
                    path: tar.path,
                },
                reason: err,
            });
        });
        promise.then(() => {
            promise.then(async (item) => {
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
        });
    }
}
