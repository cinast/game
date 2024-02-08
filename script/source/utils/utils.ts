/**
 * enjoy yourself, :D(
 * @author cinast Stexley
 * @update <time>
 * */
export const version = "0.0.0";
export const baseurl = "https://github.com/cinast/game/blob/main/";

export type K = string | number | symbol

/**
 * @deprecated
 * resource progressing function list
 * chooce your way
 */
export const parse = {
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
 * it not full-prepare now
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
