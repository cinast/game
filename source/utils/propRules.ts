/**
 * @param handle the getter
 * @param thisArg the tar value (or the `this`)
 */
export function $getter(handle: (thisArg: unknown, propertyKey: string | symbol) => void): PropertyDecorator {
    return function (target: any, propertyKey: string | symbol) {
        Object.defineProperty(target, propertyKey, {
            get(): any {
                return handle(target, propertyKey);
            },
        });
    };
}

/**
 * @param handle the setter
 * @param thisArg the tar value (or the `this`)
 */
export function $setter(handle: (thisArg: any, propertyKey: string | symbol, v: any) => any): PropertyDecorator {
    return function (target: any, propertyName: string | symbol) {
        Object.defineProperty(target, propertyName, {
            set(v: any) {
                target[propertyName] = handle(target, propertyName, v);
            },
        });
    };
}

// 再也不用写石山了，啊哈哈哈哈哈哈哈哈哈
export namespace propRules {
    export const noZero = $setter((thisArg, key, v: bigint | number) =>
        typeof v == "bigint" ? (v > 0 ? v : 0n) : Math.max(0, v)
    );

    export const noOver = (limt: bigint | number) =>
        $setter((thisArg, key, v: bigint | number) =>
            typeof v == "bigint" ? (BigInt(limt) > v ? v : limt) : Math.max(Number(limt), v)
        );

    // export const
}
