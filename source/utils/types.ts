export type K = string | number | symbol;

export type NotNever<T> = T & {};

/**
A nested object where every key (typeof K) at any depth has the same structure as the upper level, and every branch's last node is of type V. */
export type NestedObject<K extends string | number | symbol, V> = {
    [key in K]: V | NestedObject<K, V>;
};
/**
 * *`NestedObject`* partial ver.
 */
export type NestedObject_partial<K extends string | number | symbol, V> = {
    [key in K]: Partial<V> | NestedObject<K, V>;
};

/**
 * *`NestedObject`* Mappal ver.
 */
export type NestedMap<K extends string | number | symbol, V> = Map<K, NestedMap<K, V>> | Map<K, V>;

/**
 * *`NestedObject`* partial Mappal ver.
 */
export type NestedMap_partial<K extends string | number | symbol, V> = Map<K, NestedMap<K, V>> | Partial<Map<K, V>>;

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
