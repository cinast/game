import { randID } from "./utils/utils";
export class basicObject<op = undefined> {
    readonly id: string;
    readonly BaseType: string;
    type: string = "";
    tag: Record<K, K>;
    constructor(
        {
            BaseType = "",
            id = randID(),
            tag,
            type,
        }: {
            BaseType?: string;
            id?: string;
            tag?: Record<K, K>;
            type?: string;
        },
        other?: op
    ) {
        this.BaseType = BaseType;
        this.id = id;
        this.tag = tag ?? {};
        this.type = type ?? "";
        Object.assign(this, other);
    }
}
