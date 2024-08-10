import { uuid } from "@src/utils/utils";
import { Event, Floor, Character, Interval, PlayerCharacter, Item, Scene, Transfer } from "@src/router/gamecore";
import { NestedObject_partial } from "@src/utils/types";

export type specialTick = "";

export class World {
    readonly id: string = uuid.v4();
    name: string = "";
    tag: Record<K, k> = {};

    scene: Map<K, Scene> = new Map();
    Characters: Map<K, Character> = new Map();

    spawn(entity: Character | PlayerCharacter | Item, atTransfer: Transfer) {
        // the transfer is in this world (and its scenes)
        const atScene = atTransfer.atScene;
        if (!atScene || !this.scene.has(atScene.id)) return;

        if (entity instanceof Character) {
            this.Characters.set(entity.id, entity);
            this.scene.get(atScene.id)?.Characters.set(entity.id, entity);
            atScene.content[atTransfer.x][atTransfer.y].covers.characters.push(entity);
        }
        if (entity instanceof Item) {
            atScene.content[atTransfer.x][atTransfer.y].covers.item.push(entity);
        }
    }
    refresh() {
        this.scene.forEach((scene) => {
            scene.refresh();
        });
    }

    eventList: NestedObject_partial<string, Event | Event[]> & {
        onStopped: Event;
        for_entity: {
            onswpan: Event[];
        };
    } = {
        onStopped: new Event(
            "onStoped",
            () => {},
            () => this.isPaused
        ),
        for_entity: {
            onswpan: [new Event("onspawn", (entity: Character | PlayerCharacter) => {})],
        },
    };
    intervalList: NestedObject_partial<string, Interval | Interval[]> & {
        eachTick: Event[];
    } = {
        eachTick: [],
    };

    readonly starttime = new Date().getMilliseconds();

    get reallKeeppedTime() {
        return new Date().getMilliseconds() - this.starttime;
    }

    isPaused: boolean = false;

    tick: number = 0;

    tickTimerList: Array<{ id: K; nextTickAt: number; body: Interval | Event }> = [];

    taskStruck: Array<Function> = [];

    declare gatheSomething: (id: K) => any;

    delete() {}

    constructor(opinions?: { time: number; init?: boolean }) {
        if (opinions?.time) this.starttime = opinions.time;
    }
}
