/**
 * bind a getter to a object
 * @param handle the getter, target value is this.target
 */
export function $getter(handle: (thisArg: any, v: any) => typeof thisArg) {
    return function (target: any, propertyKey: string) {
        Object.defineProperty(target, propertyKey, {
            get() {
                handle;
            },
        });
    };
}

/**
 * bind a setter to a object
 * @param handle the setter, target value is this.target
 */
export function $setter(handle: (v: any) => void) {
    return function (target: any, propertyKey: string) {
        Object.defineProperty(target, propertyKey, {
            set(v) {},
        });
    };
}

export namespace propRules {
    export const noZero = $setter((v) => {});
}
