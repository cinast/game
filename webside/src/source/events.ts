import { randID } from "./utils/utils";
export class eventObjet {
    readonly id: string;
    type: string = "";
    tag: string[] = [];
    callback: Function;
    triged: boolean = false;
    constructor(type: string, callback: Function, id?: string) {
        this.id = id || randID();
        this.type = type;
        this.callback = callback;
    }
}
