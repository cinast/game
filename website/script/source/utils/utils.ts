/**
 * enjoy yourself, :D(
 * @author cinast Stexley
 * @update <time>
 * */
export const version = "0.0.0";
export const baseurl = "https://github.com/cinast/game/blob/main/";

export type K = string | number | symbol;

/**
 *
 * resource processing function list
 * choose your way
 */
export const parse: Record<K, Function> = {
    // pre:(blob:Blob)=>{FileReader(blob)},
    // aduio:(aduio,bind?)=>{
    // },
    // image:(image:Blob)=>new
} as const;

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * i wonder how deal it
 */
export function sleepUntil(condition: () => boolean): Promise<void> {
    return new Promise((resolve) => condition());
}

export function random(max: number, min?: number) {
    min = min ?? 0;
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

export function store() {}

/**
 * it not full-prepare now
 *
 * set `retry` to limit trying number
 * param `fail` only trigger once when request fail,
 * `failcount` will under retry
 */
export function XHRrequest(url: string, method: string, async?: boolean) {
    let request = new XMLHttpRequest();
    request.open(method, url, async ?? false);
    return request;
}

/**
 * get resource list form github, *\/assets/assets.json*
 * if failed, it'll notify you
 */
export function getResourseList() {
    // assets = JSON.parse(
    //     function(){
    //     }
    // )
}
