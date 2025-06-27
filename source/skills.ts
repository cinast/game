import { uuid } from "./utils/utils";

export class Skill {
    name: string = "";
    id: string = uuid.v4();
    tag: Set<string> = new Set();
}

export class SkillTree {
    name: string = "";
    id: string = uuid.v4();
    tag: Set<string> = new Set();

    canUnlock(skillId, cost) {
        return true;
    }
    private unlockedSkills: Set<string> = new Set();
    unlock(skillId: string, cost: number) {
        if (this.canUnlock(skillId, cost)) {
            this.unlockedSkills.add(skillId);
        }
    }
}
