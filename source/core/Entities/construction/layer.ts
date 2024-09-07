import { Character } from "@src/core/Entities/Characters";
import { uuid } from "@src/utils/utils";

export class Layer {
    readonly id: string;
    readonly BaseType: string = "layer";
    type: string = "nomal";
    tag: string[] = [];
    name: string = "";
    layerIndex = 0;
    // content: ImageData;
    parent: Character | void = undefined;
    constructor(type?: string, size?: number, id?: string) {
        this.id = id ?? uuid.v4();
        this.type = type ?? "";
    }
    moveto(index: number) {
        if (this.parent === undefined) return;
        let l = this.parent.layerset;
        l.splice(index, 0, l.splice(this.layerIndex, 1)[0]);
    }
    delete() {
        return this.parent == undefined ? new TypeError() : this.parent.layerset.splice(this.layerIndex, 1)[0];
    }
    concatLayer() {}
}
