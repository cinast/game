import { getEndItems, getItems, NestedObject, parse, v_is_t } from "@src/utils/utils";
import totalList from "@assets/list.json";

// Assets manager

interface LoadedAssetsListItem {
    name: string;
    id: string;
    type: string;
    path: string;
    // [key:string]:string
}

// 矢
const LoadedAssetsListItem: LoadErroredItem = {
    name: "",
    reason: undefined,
    body: {
        name: "",
        id: "",
        type: "",
        path: "",
    },
};
interface AssetItem {
    content: any;
    name: string;
    loaded: boolean;
    type: string;
    url: string;
    loadsucceed: boolean;
}

interface LoadErroredItem {
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
export const assetsList: Record<string, AssetItem> = {};
export const assetsGroups: NestedObject<string, Array<AssetItem>> = {};

export async function loadAssets() {
    for (const item in totalList) {
        //ts 的矢山写法（怒）
        const tar = totalList[item as keyof typeof totalList];
        const promise = import(tar.path);

        // importing
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

        // get & regist tables
        promise.then((list) => {
            assetsGroups[item] = list;
            Object.assign(
                assetsList,
                getItems(
                    item,
                    <>(obj, key) =>
                        
                )
                // promise.then(async (item) => {
                //     const promise = import(item.url);

                //     promise.catch((err) => {
                //         loadFailedList.push({
                //             name: item.name,
                //             reason: err,
                //             body: item,
                //         });
                //     });
                //     promise.then((resource) => {
                //         assetsList[item.url] = resource;
                //     });
                // });
            );
        });
    }
}
