import { Character } from "./character";
import { randID } from "./utils/utils";

export class Layer {
    readonly id: string;
    readonly BaseType: string = "layer";
    type: string = "nomal";
    tag: string[] = [];
    name: string = "";
    layerIndex = 0;
    // content: ImageData;
    parent: Character | undefined = undefined;
    constructor(type?: string, size?: number, id?: string) {
        this.id = id ?? randID();
        this.type = type ?? "";
    }
    moveto(index: number) {
        if (this.parent === undefined) return;
        let l = this.parent.layerset;
        l.splice(index, 0, l.splice(this.layerIndex, 1)[0]);
    }
    delete() {
        return this.parent == undefined
            ? new TypeError()
            : this.parent.layerset.splice(this.layerIndex, 1)[0];
    }
    concatLayer() {}
}
