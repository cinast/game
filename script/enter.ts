/**
 * enjoy yourself, :D(
 * @author cinast Stexley
 * @update <time>
 * */
declare const version = "0.0.0";
declare const baseurl = "https://github.com/cinast/game/blob/main/";

import "./utils"


// ui control
const pages = (() => {
    let dict = {};
    for (const e of document.querySelectorAll("page")) {
        dict[e.attributes["name"] || `<unnamed page#${randID()}>`] = e;
    }
    return dict;
})() as Record<string | number | symbol, HTMLElement>;

// assets manager
/** you'd better not touch this {} */
let assets: {} = {};
let asseetslist: {
    name: string;
    type: string;
    url: string;
    loadsucceed: boolean;
}[] = [];
let loadFailedList: {
    name: string;
    reson: Error | string | any;
    body: (typeof asseetslist)[number];
}[] = [];

async function enter() {
    //get resource
    PageTurnVisitable("loading", true);
    let rescounter: number = 0;

    for (const item of asseetslist) {
        const request = fetch(item.url, {
            method: "GET",
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data)
        });
        request.catch((error) => {
            loadFailedList.push({
                name: item.name,
                reson: error,
                body: item,
            });
        });
        request
            .then((response) => {
                let blob = response.blob();
                blob.then((result) => {
                    assets[item.name] = parse[item.type](result)
                })
            })
            .finally(() => {
                rescounter++;
            });
    }
 }