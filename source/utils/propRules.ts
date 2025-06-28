/**
 * @author @cinast
 */

/**
 * Custom getter decorator.
 * @factory
 * @param handle - Function to define the getter behavior.
 * @returns A property decorator.
 */
export function $getter(handle: (thisArg: any, propertyKey: string | symbol, ...arg: any[]) => unknown): PropertyDecorator {
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
 * @factory
 * @param handle - Function to define the setter behavior.
 * @returns A property decorator.
 */
export function $setter<T>(handle: (thisArg: any, propertyKey: string | symbol, value: T) => T): PropertyDecorator {
    return function (target: any, propertyKey: string | symbol) {
        Object.defineProperty(target, propertyKey, {
            set(value: T) {
                target[propertyKey] = handle(target, propertyKey, value);
            },
            enumerable: true,
            configurable: true,
        });
    };
}

/**
 * @author @cinast
 * make u easier decorate ur properties
 */
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
        $setter<bigint | number>((thisArg, key, v: bigint | number) => {
            let resolvedLimit: bigint | number;

            if (typeof limit === "string") {
                const refValue = thisArg[limit];
                if (typeof refValue === "bigint" || typeof refValue === "number") {
                    resolvedLimit = refValue;
                } else {
                    throw new Error("Referenced limit must be bigint or number");
                }
            } else {
                resolvedLimit = limit;
            }

            if (typeof v === "bigint") {
                const bigintLimit = typeof resolvedLimit === "bigint" ? resolvedLimit : BigInt(resolvedLimit);
                return v < bigintLimit ? v : bigintLimit;
            } else {
                const numberLimit = typeof resolvedLimit === "number" ? resolvedLimit : Number(resolvedLimit);
                return Math.min(numberLimit, v);
            }
        });

    /**
     * Ensures the property value is never less than a specified limit.
     * @param limit - `[b,n]`The maximum allowed value, \
     *                `[str]`or the key of the property that holds the limit.
     */
    export const noLower = (limit: bigint | number) =>
        $setter((thisArg, key, v: bigint | number) => {
            if (typeof limit === "string") limit = thisArg[limit];
            return typeof v === "bigint" ? (BigInt(limit) < v ? v : limit) : Math.max(Number(limit), v);
        });
    // export const atRangeOf = (low)

    /**
     * @param T Input type, non be any
     * @param handle
     * @returns
     */
    export const watchSet = <T>(handle: (thisArg: any, propertyKey: string | symbol, value: T) => T) => $setter<T>(handle);

    export const onlyWhen = (condition: () => boolean) => $setter((thisArg, key, v) => (condition() ? v : thisArg));
}
