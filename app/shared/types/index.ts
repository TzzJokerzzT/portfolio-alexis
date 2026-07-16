export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SkillItemProps {
  name: string;
  icon?: string;
  index: number;
}
