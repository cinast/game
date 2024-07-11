import { gameBasicObject } from "./basic";
import { eventObject } from "./events";
import { Scene } from "./scene";
import {
    NestedObject,
    NestedObject_and_partialItself,
    NestedObject_partial,
    randID,
} from "./utils/utils";

/**
 * Anything can be interact or be used, distinguish from `Items`
 * included wall, door, boxes, etc.
 */
export class Buildiing extends gameBasicObject {
    id: string = "Buildiing#" + randID();
    name: string = randID();
    description: string = "";
    passable: NestedObject<string, boolean> & {
        above: boolean;
        /** the object itself */
        across: boolean;
        below: boolean;
    } = {
        above: false,
        across: false,
        below: false,
    };

    eventList: NestedObject<string, eventObject> & {
        interacts: NestedObject<string, eventObject>;
    } = {
        interacts: {
            onstandOn: new eventObject("onstandOn", () => {}),
            /** dox likes use only */
            onopen: new eventObject("onopen", () => {}),
            /** traps likes use only */
            ontrigeSth: new eventObject("ontrigeSth", () => {}),
        },
    };

    detele() {
        // h e l p    m e
    }

    constructor(
        name: string,
        description: string,
        effect: NestedObject<string, eventObject>
    ) {
        super();
        this.name = name;
        this.description = description;
        this.eventList.interacts = Object.assign(effect);
    }
}

export class Door extends Buildiing {
    id: string = "Door#" + randID();
    eventList: NestedObject<string, eventObject> & {
        interacts: NestedObject<string, eventObject>;
    } = {
        interacts: {
            onpush: new eventObject("onpush", () => {}),
        },
    };
}

/**
 * enterance or exit of every scenes
 */
export class EnteranceLike extends Door {
    connectTo: NestedObject_partial<string, sceneCollection> & {
        in: Partial<sceneCollection>;
    } = {
        in: {},
    };
}
