import { gameBasicObject } from "./basic";
import { Character } from "./character";
import { eventObject } from "./events";
import { Floor, Scene } from "./scene";
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
            // onstandOn: new eventObject("onstandOn", () => {}),
            // /** dox likes use only */
            // onopen: new eventObject("onopen", () => {}),
            // /** traps likes use only */
            // ontrigeSth: new eventObject("ontrigeSth", () => {}),
        },
    };

    detele() {
        // h e l p    m e
    }

    constructor(
        name: string,
        passable: NestedObject<string, boolean> & {
            above: boolean;
            across: boolean;
            below: boolean;
        } = {
            above: false,
            across: false,
            below: false,
        },
        interacts: NestedObject<string, eventObject>
    ) {
        super();
        this.name = name;
        this.passable = passable;
        this.eventList.interacts = interacts;
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
export class Transfer extends Door {
    name: string = "Transfer#" + randID();
    passable: NestedObject<string, boolean> & {
        above: boolean;
        across: boolean;
        below: boolean;
    } = {
        above: true,
        across: true,
        below: false,
    };

    connectTo: NestedObject_partial<string, Scene> & {
        enter: Partial<Scene>;
    } = {
        enter: {},
    };

    eventList: NestedObject<string, eventObject> & {
        interacts: NestedObject<string, eventObject>;
    } = {
        interacts: {
            /**
             * @deprecated
             */
            onenter: new eventObject("onenter", (entity: Character) => {
                gobalGame.currentScene = this.connectTo.enter;
            }),
        },
    };

    constructor(name: "ToNextFloor" | "toPrevFloor", to?: Scene) {
        super(name, _, {});
        this.connectTo.enter = to ?? {};
    }
}

export class FloorTransfer extends Transfer {}
