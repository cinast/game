declare const version = "0.0.0";
declare const baseurl = "https://github.com/cinast/game/blob/main/";

declare type K = string | number | symbol
declare type objectCollection = character | clonedCharacter
declare type senseCollection = sense
declare type gameCollection = omit<objectCollection,senseCollection>

declare const world: {
    characterkist: character[],
    sense: sense[],
    time: number,
    date: Date,
}

class sense {
    readonly id: string
    readonly BaseType: "sense";
    type: string
    tag: string[]
    Idnex
    characters: Record<string, character>;
    name: any;
    addCharacter(...character: character[]): void
    remove() { }
}

declare class basicObject {
    readonly id: string;
    readonly BaseType: string
    type: string
    tag: string[]
    constructor(id?: string)
}


declare class character extends basicObject {
    BaseType: "character";
    x: number
    y: number
    name: string
    globalSize: number
    visitable: boolean
    rotation: number
    isClone: boolean
    cloneNumber: number
    hasCloned: number
    clones: clonedCharacter[]
    CloneFrom: character | undefined;
    effects;
    layerset: Layer[];
    eventList: Record<string, eventObjet>;
    moveto(x: number, y: number): void
    clone(): clonedCharacter
    set cloneFrom(char: character | undefined)
    addEvListener(type: string, callback: Function): string
    deteleEvListener(evID: string, replace?: eventObjet): void
}

declare class clonedCharacter extends character {
    isClone: boolean
    set cloneFrom(char: character | undefined)
    constructor(baseChara: character | clonedCharacter)
}

declare class Layer {
    readonly id: string;
    readonly BaseType: string
    type: string
    tag: string[]
    name: string
    layerIndex: number
    // content: ImageData;
    parent: character | undefined
    constructor(type?: string, size?: number, id?: string)
    moveto(index: number): void
    delete(): Layer | undefined | never
    concatLayer() { }
}

