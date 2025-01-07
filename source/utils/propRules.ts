/**
 * Custom getter decorator.
 * @param handle - Function to define the getter behavior.
 * @returns A property decorator.
 */
export function $getter(handle: (thisArg: unknown, propertyKey: string | symbol, ...arg: any[]) => any): PropertyDecorator {
    return function (target: any, propertyKey: string | symbol) {
        Object.defineProperty(target, propertyKey, {
            get(): any {
                return handle(target, propertyKey);
            },
            enumerable: true,
            configurable: true,
        });
    };
}

/**
 * Custom setter decorator.
 * @param handle - Function to define the setter behavior.
 * @returns A property decorator.
 */
export function $setter(handle: (thisArg: any, propertyKey: string | symbol, ...arg: any[]) => any): PropertyDecorator {
    return function (target: any, propertyKey: string | symbol) {
        Object.defineProperty(target, propertyKey, {
            set(v: any) {
                target[propertyKey] = handle(target, propertyKey, v);
            },
            enumerable: true,
            configurable: true,
        });
    };
}

export namespace propRules {
    /**
     * Ensures the property value is never less than zero.
     */
    export const noZero = $setter((thisArg, key, v: bigint | number) =>
        typeof v === "bigint" ? (v > 0 ? v : 0n) : Math.max(0, v)
    );

    /**
     * Ensures the property value does not exceed a specified limit.
     * @param limit - `[b,n]`The maximum allowed value, \
     *                `[str]`or the key of the property that holds the limit.
     */
    export const noOver = (limit: bigint | number | string) =>
        $setter((thisArg, key, v: bigint | number) => {
            if (typeof limit === "string") limit = thisArg[limit];
            return typeof v === "bigint" ? (BigInt(limit) > v ? v : limit) : Math.min(Number(limit), v);
        });
    /**
     * Ensures the property value is never less than a specified limit.
     * @param limit - `[b,n]`The maximum allowed value, \
     *                `[str]`or the key of the property that holds the limit.
     */
    export const noLower = (limit: bigint | number | string) =>
        $setter((thisArg, key, v: bigint | number) => {
            if (typeof limit === "string") limit = thisArg[limit];
            return typeof v === "bigint" ? (BigInt(limit) < v ? v : limit) : Math.max(Number(limit), v);
        });
    // export const atRangeOf = (low)
}
