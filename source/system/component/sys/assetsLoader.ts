import { getItems } from "@src/utils/utils";
import { NestedObject } from "@src/utils/types";
import parse from "@sys/component/assetParser";
import totalList from "@assets/list.json";

// Assets manager

interface LoadedAssetsListItem {
    name: string;
    id: string;
    type: string;
    path: string;
    // [key:string]:string
}

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

const resourcetypes = [""] as const;

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
        promise.then((source) => {
            assetsGroups[item] = source;

            try {
                const table = source.img as NestedObject<
                    string,
                    {
                        name: string;
                        id: string;
                        type: string;
                        path: string;
                    }[]
                >;

                const gotItems = getItems(
                    table,
                    (sort) => Array.isArray(sort) && sort.every((i) => (i?.type ? resourcetypes.includes(i.type) : false)),
                    item
                ) as Record<
                    string,
                    {
                        name: string;
                        id: string;
                        type: string;
                        path: string;
                    }
                >;

                for (const i in gotItems) {
                    const itemPromise = import(gotItems[i].path);
                    itemPromise.catch((err) => console.error);
                    itemPromise.then((sth) => {
                        if (assetsList[i]) throw new Error(`assets#${i} already registed`);
                        let data = parse[gotItems[i].type](sth);
                        assetsList[i] = data;
                    });
                }
            } catch (err) {
                console.error(err);
            }
        });
    }
}
