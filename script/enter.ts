import "./source/utils/utils"
import "./source/utils"

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


/**
 * get resource list form github, *\/assets/assets.json*
 * if failed, it'll remind you
 */
export function getResourseList() {
    assets = JSON.parse(
        XHRrequest("get", `${baseurl}`, false, 0, (c) => {
            if (c > 3) {
                throw new Error(
                    "assets list load failed \nyou need check network"
                );
            }
        })
    );
}


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

new Worker("./main.ts")