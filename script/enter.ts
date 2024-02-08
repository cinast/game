/**
 * enjoy yourself, :D(
 * @author cinast Stexley
 * @update <time>
 * */
declare const version = "0.0.0";
declare const baseurl = "https://github.com/cinast/game/blob/main/";

//    --- gobol define ---
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

/**
 * resource progressing function list
 * chooce your way
 */
const parse = {
    // pre:(blob:Blob)=>{FileReader(blob)},
    // aduio:(aduio,bind?)=>{
    // },
    // image:(image:Blob)=>new
} as const;

// accounts
class account {
    name: string;
    readonly id: string;
    //em, i don't how to do this
    tk: string;
    data: {};
    constructor(name: string, password: string) {
        this.name = name;
        this.tk = password;
    }
}

//    --- tool functions ---
function random(max: number, min?: number) {
    min = min || 0;
    if (max < min) max ^= min;
    return Math.random() * (max - min) + min;
}

function randint(max: number, min?: number) {
    return random(max, min);
}

/**
 * no hash (laugh
 */
function randID() {
    return randint(1e10).toString(16);
}

function read() {
    localStorage.getItem("x62o");
}

function store() { }

/**
 * *\*for quicker use\**
 *
 * set `retry` to limt trying number
 * param `fail` only trig once when request fail,
 * `failcount` will under retry
 */
function XHRrequest(
    url: string,
    method: string,
    async?: boolean,
    retry?: number,
    fail?: (failcount: number) => any
) {
    let failcount: number = 0,
        response;
    retry = retry || 0;
    inner();
    return response;
    function inner() {
        const request = new XMLHttpRequest();
        request.open(method, url, async || false);
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                const status = request.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                    response = request.response;
                } else {
                    failcount++;
                    if (retry || failcount < (retry as number)) {
                        inner();
                    } else {
                        if (fail instanceof Function) {
                            response = fail(failcount);
                        } else response = new Error("request failed");
                    }
                }
            }
        };
    }
}

/**
 * shown page or not
 */
function PageTurnVisitable(name: string | number | symbol, v: boolean) {
    pages[name].style.visibility = v ? "visible" : "hidden";
}

/**
 * shown page or not
 * 
 */
function PageTurnVisitable(list:{[k in string | number | symbol]: boolean}) {
    for(let i in list){
        pages[i].style.visibility = list[i] ? "visible" : "hidden";
    }
}

//    --- progress ---
/**
 * get resource list form github, *\/assets/assets.json*
 * if failed, it'll remind you
 */
function getResourseList() {
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

function loadboard() {
    let loadboard = pages["loading"],
        bar = loadboard.querySelector("#loading_bar") as HTMLElement
}

//  ---- runtime ----
/**
 * hh, I think you can't open it again
 * don't force open it if assets not ready
 */
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