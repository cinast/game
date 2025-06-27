import uuid from "uuid";
export { uuid };

/**
 * enjoy yourself, :D(
 * @author cinast Stexley
 * @update <time>
 * */
export const version = "0.0.0";
export const baseurl = "https://github.com/cinast/game/blob/main/";

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

export function randint(max: number, min?: number, mod: "ceil" | "floor" | "round" | "trunc" = "round") {
    const result = {
        ceil: (v: number) => Math.ceil(v),
        floor: (v: number) => Math.floor(v),
        round: (v: number) => Math.round(v),
        trunc: (v: number) => Math.trunc(v),
    };
    return result[mod](random(max, min));
}

/**
 *
 */
export function randBint(max: number, min?: number, mod: "ceil" | "floor" | "round" | "trunc" = "round") {
    return BigInt(random(max, min));
}

/**
 * limt a *val* with open interval \
 * **notice**: have better use same type of args
 */

/**
 * limt a **number** with open interval
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * get the property you want by certain function `predicate`
 * @param obj the object you wanna search
 * @param prefix the path start with
 * @param predicate [required] the function check if satisfy the condition
 * @returns list of results
 */
export function getItems(obj: any, predicate: (thisArg: any) => boolean, prefix: string = ""): { [key: string]: any } {
    const result: { [key: string]: any } = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const propName = prefix ? `${prefix}.${key}` : key;
            if (predicate(obj[key])) {
                // Found an end item, add it to the result
                result[propName] = obj[key];
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
                // Recursively traverse the object
                getItems(obj[key], predicate, propName);
            }
        }
    }

    return result;
}

/**
 * get the property at the end of every property branch
 * @param obj the object you wanna search
 * @param prefix the path start with
 * @returns list of results
 */
export function getEndItems(obj: any, prefix: string = ""): { [key: string]: any } {
    const result: { [key: string]: any } = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const propName = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === "object" && obj[key] !== null) {
                // Recursively traverse the object
                Object.assign(result, getEndItems(obj[key], propName));
            } else {
                // Found an end item, add it to the result
                result[propName] = obj[key];
            }
        }
    }

    return result;
}
