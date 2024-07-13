import { gameBasicObject } from "./basic";
import { Character } from "./character";
import { eventObject } from "./events";
import { Floor, Scene } from "./scene";
import { NestedObject, NestedObject_partial, randID } from "./utils/utils";

/**
 * Anything can be interact or be used, distinguish from `Items` \
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
        interacts: NestedObject<string, eventObject>,
        passable: NestedObject<string, boolean> & {
            above: boolean;
            across: boolean;
            below: boolean;
        } = {
            above: false,
            across: false,
            below: false,
        }
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
    thisScene?: Scene;
    passable: NestedObject<string, boolean> & {
        above: boolean;
        across: boolean;
        below: boolean;
    } = {
        above: true,
        across: true,
        below: false,
    };

    connectTo: NestedObject_partial<string, Transfer> & {
        enter: Partial<Transfer>;
    } = {
        enter: {},
    };

    eventList: NestedObject<string, eventObject> & {
        interacts: NestedObject<string, eventObject> & {
            onenter: eventObject;
        };
    } = {
        interacts: {
            onenter: new eventObject("onenter", (entity: Character) => {
                /** help */
            }),
        },
    };

    /**
     * build connection between two transfers \
     * even cross different scenes
     */
    connect(tr: Transfer, isBidirectional: boolean = false) {
        this.connectTo.enter = tr;
        if (isBidirectional) {
            tr.connectTo.enter = this;
        }
    }

    /**
     * build connection between two transfers \
     * even cross different scenes
     */
    static connect(
        this: Transfer,
        tar: Transfer,
        isBidirectional: boolean = false
    ) {
        this.connectTo.enter = tar;
        if (isBidirectional) {
            tar.connectTo.enter = this;
        }
    }

    constructor(
        name: "ToNextFloor" | "FromPrevFloor",
        thisScene?: Scene,
        to?: Transfer
    ) {
        super(name, {});
        this.thisScene = thisScene;
        this.connectTo.enter = to ?? {};
    }
}

/**
 * @deprecated
 */
export class FloorTransfer extends Transfer {}
