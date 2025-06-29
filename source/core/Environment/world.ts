import { uuid } from "@src/utils/utils";
import { Floor, Character, PlayerCharacter, Item, Scenario, Transfer } from "@src/router/gamecore";
import { Event, Interval } from "@src/utils/events";
import { NestedObject_partial } from "@src/utils/types";

const specialTicks: (symbol | string | number)[] = [""];
export type specialTicks = (typeof specialTicks)[number];

export interface WorldRules {
    timeScale: number;
    physics: {
        gravity: number;
        collisionEnabled: boolean;
    };
    allowMultiplayer: boolean;
    persistence: {
        autoSave: boolean;
        saveInterval: number;
    };
}

export class World {
    readonly id: string = uuid.v4();
    name: string = "";
    description: string = "";
    tags: Record<string, any> = {};
    rules: WorldRules = {
        timeScale: 1.0,
        physics: {
            gravity: 9.8,
            collisionEnabled: true,
        },
        allowMultiplayer: false,
        persistence: {
            autoSave: false,
            saveInterval: 300000, // 5 minutes
        },
    };

    // Core collections
    Scenarios: Map<string, Scenario> = new Map();
    Characters: Map<string, Character> = new Map();
    Items: Map<string, Item> = new Map();
    Players: Map<string, PlayerCharacter> = new Map();

    // Task system
    private taskQueue: Array<{
        id: string;
        task: () => Promise<void>;
        priority: number;
    }> = [];
    private activeTasks: Set<string> = new Set();

    /** 添加场景到世界 */
    addScenario(scenario: Scenario): void {
        if (!this.Scenarios.has(scenario.id)) {
            scenario.atWorld = this;
            this.Scenarios.set(scenario.id, scenario);
        }
    }

    /** 从世界移除场景 */
    removeScenario(scenarioId: string): boolean {
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
    removeCharacters(characterIds: string[]): number {
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

    eventList = {
        onStopped: new Event(
            "onStopped",
            () => {},
            () => this.isPaused
        ),
        for_entity: {
            onSpawn: [new Event("onSpawn", (entity: Character | PlayerCharacter) => {})],
        },
    };

    intervalList = {
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

    tickTimerList: Array<{ id: string; nextTickAt: number; body: Interval | Event }> = [];

    taskStack: Array<Function> = [];

    declare gatherSomething: (id: string) => any;

    /** 设置世界规则 */
    setRules(newRules: Partial<WorldRules>): void {
        this.rules = {
            ...this.rules,
            ...newRules,
            physics: {
                ...this.rules.physics,
                ...(newRules.physics || {}),
            },
            persistence: {
                ...this.rules.persistence,
                ...(newRules.persistence || {}),
            },
        };
    }

    /** 添加任务到队列 */
    addTask(id: string, task: () => Promise<void>, priority: number = 0): void {
        this.taskQueue.push({ id, task, priority });
        this.taskQueue.sort((a, b) => b.priority - a.priority);
    }

    /** 执行下一个任务 */
    async executeNextTask(): Promise<boolean> {
        if (this.taskQueue.length === 0) return false;

        const nextTask = this.taskQueue.shift();
        if (!nextTask || this.activeTasks.has(nextTask.id)) return false;

        this.activeTasks.add(nextTask.id);
        try {
            await nextTask.task();
        } finally {
            this.activeTasks.delete(nextTask.id);
        }
        return true;
    }

    /** 更新世界时间 */
    update(deltaTime: number): void {
        if (this.isPaused) return;

        // 应用时间缩放
        const scaledDelta = deltaTime * this.rules.timeScale;
        this.tick += scaledDelta;

        // 处理定时器
        this.tickTimerList = this.tickTimerList.filter((timer) => {
            if (timer.nextTickAt <= this.tick) {
                timer.body.callback();
                return false;
            }
            return true;
        });

        // 执行任务
        while (this.executeNextTask()) {}
    }

    /** 添加定时器 */
    addTimer(id: string, interval: number, callback: () => void): void {
        this.tickTimerList.push({
            id,
            nextTickAt: this.tick + interval,
            body: new Interval(interval, callback, id),
        });
    }

    /** 移除定时器 */
    removeTimer(id: string): void {
        this.tickTimerList = this.tickTimerList.filter((timer) => timer.id !== id);
    }

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
