import type { NavItem, SocialLink } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
];

export const DEVELOPER_INFO = {
  name: "Phantom Developer",
  title: "Frontend Developer",
  email: "developer@example.com",
  location: "Tokyo, Japan",
  bio: "A phantom thief of the digital realm, stealing hearts through exceptional user experiences and elegant code.",
};
