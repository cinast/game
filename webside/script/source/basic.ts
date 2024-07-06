import { randID } from "./utils/utils";
export class basicObject {
    readonly id: string;
    readonly BaseType: string;
    type: string = "";
    tag: Record<k, K>;
    constructor({
        BaseType = "",
        id = randID(),
        tag,
        type,
    }: {
        BaseType?: string;
        id?: string;
        tag?: Record<k, K>;
        type?: string;
    }) {
        this.BaseType = BaseType;
        this.id = id;
        this.tag = tag ?? {};
        this.type = type ?? "";
    }
}
