import type { SkillListResponse } from "@/app/shared/api/types";

export function groupByCategory(skills: SkillListResponse[]) {
  return skills.reduce<
    Record<string, { category: string; skills: SkillListResponse[] }>
  >((acc, skill) => {
    const cat = skill.category;
    if (!acc[cat]) {
      acc[cat] = { category: cat, skills: [] };
    }
    acc[cat].skills.push(skill);
    return acc;
  }, {});
}
