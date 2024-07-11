import { gameBasicObject } from "./basic";
import { eventObject } from "./events";
import { NestedObject, randID } from "./utils/utils";

/**
 * Anything can be interact or be used, distinguish from `Items`
 * included wall, door, boxes, etc.
 */
export class Buildiings extends gameBasicObject {
    id: string = "Buildiing#" + randID();
    name: string = randID();
    description: string = "";
    passable: NestedObject<string, senseCollection> & {
        above: boolean;
        /** the object itself */
        across: boolean;
        below: boolean;
    } = {
        above: true,
        across: false,
        below: false,
    };

    eventList: NestedObject<string, eventObject> & {
        interacts: NestedObject<string, eventObject>;
    } = {
        interacts: {
            onstandOn: new eventObject("onstandOn", () => {}),
            /** doors likes use only */
            onpush: new eventObject("onpush", () => {}),
            /** dox likes use only */
            onopen: new eventObject("onopen", () => {}),
            /** traps likes use only */
            ontrigeSth: new eventObject("ontrigeSth", () => {}),
        },
    };
    connectTo: NestedObject<string, senseCollection> = {};

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
