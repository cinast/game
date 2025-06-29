import { uuid } from "@src/utils/utils";
import { Floor, Character, PlayerCharacter, Item, Scenario, Transfer } from "@src/router/gamecore";
import { Event, Interval } from "@src/utils/events";
import { NestedObject_partial } from "@src/utils/types";

export type specialTick = "";

export class World {
    readonly id: string = uuid.v4();
    name: string = "";
    tag: Record<K, k> = {};

    Scenarios: Map<K, Scenario> = new Map();
    Characters: Map<K, Character> = new Map();

    /** 添加场景到世界 */
    addScenario(scenario: Scenario): void {
        if (!this.Scenarios.has(scenario.id)) {
            scenario.atWorld = this;
            this.Scenarios.set(scenario.id, scenario);
        }
    }

    /** 从世界移除场景 */
    removeScenario(scenarioId: K): boolean {
        const scenario = this.Scenarios.get(scenarioId);
        if (scenario) {
            scenario.atWorld = undefined;
            return this.Scenarios.delete(scenarioId);
        }
        return false;
    }

    /** 批量添加角色 */
    addCharacters(characters: Character[]): void {
        characters.forEach((character) => {
            this.Characters.set(character.id, character);
            // 移除character.atWorld = this; 因为Character类没有这个属性
        });
    }

    /** 批量移除角色 */
    removeCharacters(characterIds: K[]): number {
        let count = 0;
        characterIds.forEach((id) => {
            if (this.Characters.delete(id)) count++;
        });
        return count;
    }

    spawn(entity: Character | PlayerCharacter | Item, atTransfer: Transfer) {
        // the transfer is in this world (and its scenes)
        const atScene = atTransfer.atScene;
        if (!atScene || !this.Scenarios.has(atScene.id)) return;

        if (entity instanceof Character) {
            this.Characters.set(entity.id, entity);
            this.Scenarios.get(atScene.id)?.Characters.set(entity.id, entity);
            atScene.content[atTransfer.x][atTransfer.y].covers.characters.push(entity);
        }
        if (entity instanceof Item) {
            atScene.content[atTransfer.x][atTransfer.y].covers.item.push(entity);
        }
    }
    refresh() {
        this.Scenarios.forEach((scene) => {
            scene.refresh();
        });
    }

    eventList: NestedObject_partial<string, Event | Event[]> & {
        onStopped: Event;
        for_entity: {
            onSpawn: Event[];
        };
    } = {
        onStopped: new Event(
            "onStopped",
            () => {},
            () => this.isPaused
        ),
        for_entity: {
            onSpawn: [new Event("onSpawn", (entity: Character | PlayerCharacter) => {})],
        },
    };
    intervalList: NestedObject_partial<string, Interval | Interval[]> & {
        eachTick: Event[];
    } = {
        eachTick: [],
    };

    readonly starttime = new Date().getMilliseconds();

    get reallyKeptTime() {
        return new Date().getMilliseconds() - this.starttime;
    }

    isPaused: boolean = false;

    /** 暂停游戏世界 */
    pause(): void {
        this.isPaused = true;
        this.eventList.onStopped.callback();
    }

    /** 恢复游戏世界 */
    resume(): void {
        this.isPaused = false;
    }

    tick: number = 0;

    tickTimerList: Array<{ id: K; nextTickAt: number; body: Interval | Event }> = [];

    taskStack: Array<Function> = [];

    declare gatherSomething: (id: K) => any;

    /** 广播全局事件 */
    broadcastEvent(eventType: string, data?: any): void {
        this.Scenarios.forEach((scenario) => {
            const event = scenario.eventList[eventType];
            if (!event) return;

            if (event instanceof Event) {
                const evt = event as { callback?: (...args: any[]) => void };
                if (evt.callback) {
                    evt.callback(data);
                }
            } else if (Array.isArray(event)) {
                event.forEach((e) => {
                    const evt = e as { callback?: (...args: any[]) => void };
                    if (evt?.callback) {
                        evt.callback(data);
                    }
                });
            }
        });
    }

    /** 保存世界状态 */
    saveState(): Record<string, any> {
        return {
            id: this.id,
            name: this.name,
            tick: this.tick,
            scenarios: [...this.Scenarios.keys()],
            characters: [...this.Characters.keys()],
        };
    }

    /** 加载世界状态 */
    loadState(state: Record<string, any>): void {
        this.name = state.name;
        this.tick = state.tick;
    }

    delete() {
        this.Scenarios.clear();
        this.Characters.clear();
    }

    constructor(opinions?: { time: number; init?: boolean }) {
        if (opinions?.time) this.starttime = opinions.time;
    }
}
