import { SkillLevelType } from '../models/common';

const SKILL_LEVELS: Array<{ name: SkillLevelType; value: SkillLevelType; order: number }> = [
  { name: 'ADVANCED', value: 'ADVANCED', order: 3 },
  { name: 'BEGINNER', value: 'BEGINNER', order: 1 },
  { name: 'INTERMEDIATE', value: 'INTERMEDIATE', order: 2 },
  { name: 'MASTER', value: 'MASTER', order: 4 },
];

export { SKILL_LEVELS };
