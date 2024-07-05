import { randID } from "./utils/utils";
export class basicObject<T> {
    readonly id: string;
    readonly BaseType: string = "";
    type: string = "";
    tag: T;
    constructor({ id?:string, tag?:T }: {
        id?: string,
        tag?: T
    } ) {
        this.id = id || randID();
        this.tag = tag;
    }
}