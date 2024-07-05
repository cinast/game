import { randID } from "./utils/utils";
export class basicObject<T = {}, op = undefined> {
    readonly id: string;
    readonly BaseType: string = "";
    type: string = "";
    tag: T | {};
    constructor({ id = randID(), tag }: { id?: string; tag?: T }, other?: op) {
        this.id = id;
        this.tag = tag ?? {};
        Object.assign(this, other);
    }
}
