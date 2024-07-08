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
 * resource progressing function list
 * chooce your way
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

/**
 * limt a **number** with open interval
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * limt a **bogint** with open interval
 */
export function clamp_bint(value: bigint, min: bigint, max: bigint): bigint {
    let x = value > min ? value : min;
    return x < max ? x : max;
}

export function read() {
    localStorage.getItem("x62o");
}

export function store() {}

/**
 * it not full-prepare now
 *
 * set `retry` to limt trying number
 * param `fail` only trig once when request fail,
 * `failcount` will under retry
 */
export function XHRrequest(url: string, method: string, async?: boolean) {
    let request = new XMLHttpRequest();
    request.open(method, url, async ?? false);
    return request;
}

/**
 * get resource list form github, *\/assets/assets.json*
 * if failed, it'll remind you
 */
export function getResourseList() {
    // assets = JSON.parse(
    //     function(){
    //     }
    // )
}

/**
 * Deep copy a nested object
 * @from https://www.delftstack.com/zh/howto/typescript/typescript-cloning-an-object/#typescript-%e4%b8%ad%e7%9a%84%e5%85%8b%e9%9a%86%e6%9c%ba%e5%88%b6
 */
function deepCopy<T>(instance: T): T {
    if (instance == null) {
        return instance;
    }

    // handle Dates
    if (instance instanceof Date) {
        return new Date(instance.getTime()) as any;
    }

    // handle Array types
    if (instance instanceof Array) {
        var cloneArr = [] as any[];
        (instance as any[]).forEach((value) => {
            cloneArr.push(value);
        });
        // for nested objects
        return cloneArr.map((value: any) => deepCopy<any>(value)) as any;
    }
    // handle objects
    if (instance instanceof Object) {
        var copyInstance = { ...(instance as { [key: string]: any }) } as {
            [key: string]: any;
        };
        for (var attr in instance) {
            if ((instance as Object).hasOwnProperty(attr))
                copyInstance[attr] = deepCopy<any>(instance[attr]);
        }
        return copyInstance as T;
    }
    // handling primitive data types
    return instance;
}
