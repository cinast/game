import { randID } from "./utils/utils";
export class basicObject {
    readonly id: string;
    type: string = "";
    tag: Record<k, K> = {};
    constructor(id?: string) {
        this.id = id ?? randID();
    }
}
