import { uuid.v4 } from "@src/utils/utils";

export class effect {
    name: string;
    tag: string[] = [];
    predicate: Function;
    constructor(name: string, willHappen: Function) {
        this.name = name || `effect#${uuid.v4()}`;
        this.predicate = willHappen;
    }
}
