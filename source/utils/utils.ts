import { error } from "jquery";

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
export const parse: Record<K, (...any: any[]) => any> = {
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
 * no hash (laugh
 */
export function randID(base: number = 16) {
    return randint(1e10).toString(base);
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
 * get the property you want by cretain funtion `predicate`
 * @param obj the object you wanna sreach
 * @param prefix the path start with
 * @param predicate the function check if satisfy the condition, offen
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
 * @param obj the object you wanna sreach
 * @param prefix the path start with
 * @param predicate the function check if satisfy the condition, offen
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

/**
A nested object where every key (typeof K) at any depth has the same structure as the upper level, and every branch's last node is of type V. */
export type NestedObject<K extends string | number | symbol, V> = {
    [key in K]: V | NestedObject<K, V>;
};
/**
A partial nested object where every key (typeof K) at any depth has the same structure as the upper level, and every branch's last node can be either V or undefined, but not other types. 
*/
export type NestedObject_partial<K extends string | number | symbol, V> = {
    [key in K]: Partial<V> | NestedObject<K, V>;
};

// from: htts://ououe.com/posts/typescript-object-deep-path
type NestedPath<T extends "array" | "object", P, C = undefined> = `${P & string}${T extends "array"
    ? `[${number}]`
    : ""}${C extends string ? `.${C}` : ""}`;

type DeepNested<V, K = ""> = V extends object[]
    ? NestedPath<"array", K, DeepPath<V[number]> | void>
    : V extends unknown[]
    ? NestedPath<"array", K>
    : V extends object
    ? NestedPath<"object", K, DeepPath<V>>
    : never;

export type DeepPath<T extends object> = {
    [Q in keyof T]-?: Q | DeepNested<NonNullable<T[Q]>, Q>;
}[keyof T];

export type attrTreePath<T extends object> = DeepPath<T>;
// -------

export type hasPropertyOf<T, P> = P extends `${infer Head}.${infer Tail}`
    ? Head extends keyof T
        ? hasPropertyOf<T[Head], Tail>
        : never
    : P extends keyof T
    ? T[P]
    : never;
