import { gameBasicObject } from "@src/core/basic";
import { Character } from "@src/core/character";
import { Event } from "@src/core/events";
import { Floor, Scene } from "@src/core/scene";
import { NestedObject, NestedObject_partial, uuid } from "@src/utils/utils";

/**
 * Anything can be interact or be used, distinguish from `Items` \
 * included wall, door, boxes, etc.
 */
export class Buildiing extends gameBasicObject {
    id: string = "Buildiing#" + uuid.v4();
    name: string = uuid.v4();
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

    eeventList: NestedObject_partial<string, Event | Event[]> & {
        interacts: NestedObject<string, Event>;
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
        interacts: NestedObject<string, Event>,
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
    id: string = "Door#" + uuid.v4();
    eeventList: NestedObject_partial<string, Event | Event[]> & {
        interacts: NestedObject<string, Event>;
    } = {
        interacts: {
            onpush: new Event("onpush", () => {}),
        },
    };
}

/**
 * enterance or exit of every scenes
 */
export class Transfer extends Door {
    name: string = "Transfer#" + uuid.v4();
    // thisScene?: Scene;
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

    eeventList: NestedObject_partial<string, Event | Event[]> & {
        interacts: NestedObject<string, Event> & {
            onenter: Event;
        };
    } = {
        interacts: {
            onenter: new Event("onenter", (entity: Character) => {
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
    static connect(this: Transfer, tar: Transfer, isBidirectional: boolean = false) {
        this.connectTo.enter = tar;
        if (isBidirectional) {
            tar.connectTo.enter = this;
        }
    }

    constructor(
        name: "ToNextFloor" | "FromPrevFloor",
        // thisScene?: Scene,
        to?: Transfer
    ) {
        super(name, {});
        // this.thisScene = thisScene;
        this.connectTo.enter = to ?? {};
    }
}

/**
 * @deprecated
 */
export class FloorTransfer extends Transfer {}
