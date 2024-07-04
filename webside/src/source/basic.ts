import { randID } from "./utils/utils";

export class basicObject {
    readonly id: string;
    readonly BaseType: string = "";
    type: string = "";
    tag: string[] = [];
    constructor(id?: string) {
        this.id = id || randID();
    }
}
