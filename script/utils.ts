/**
 * @deprecated
 * resource progressing function list
 * chooce your way
 */
declare const parse = {
    // pre:(blob:Blob)=>{FileReader(blob)},
    // aduio:(aduio,bind?)=>{
    // },
    // image:(image:Blob)=>new
} as const;

export function random(max: number, min?: number) {
    min = min || 0;
    if (max < min) max ^= min;
    return Math.random() * (max - min) + min;
}

export function randint(max: number, min?: number) {
    return random(max, min);
}

/**
 * no hash (laugh
 */
export function randID() {
    return randint(1e10).toString(16);
}

export function read() {
    localStorage.getItem("x62o");
}

export function store() { }

/**
 * @deprecated 
 * it not full-prepare now
 * *\*for quicker use\**
 *
 * set `retry` to limt trying number
 * param `fail` only trig once when request fail,
 * `failcount` will under retry
 */
export function XHRrequest(
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
export function PageTurnVisitable(name: string | number | symbol, v: boolean) {
    pages[name].style.visibility = v ? "visible" : "hidden";
}

/**
 * shown page or not
 * put names into the dict and set switch
 */
export function PageTurnVisitable(list:{[k in string | number | symbol]: boolean}) {
    for(let i in list){
        pages[i].style.visibility = list[i] ? "visible" : "hidden";
    }
}

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

export function loadboard() {
    let loadboard = pages["loading"],
        bar = loadboard.querySelector("#loading_bar") as HTMLElement
}