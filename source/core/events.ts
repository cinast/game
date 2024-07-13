import { randID } from "@src/utils/utils";
export class eventObject {
    readonly id: string;
    type: string = "";
    tag: string[] = [];
    callback: Function;
    triged: boolean = false;
    constructor(type: string, callback: Function, tag?: string[], id?: string) {
        this.id = id ?? randID();
        this.type = type;
        this.tag = tag ?? [];
        this.callback = callback;
    }
}
