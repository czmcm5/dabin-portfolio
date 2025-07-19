type ColorType =
  | "ruby"
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "green"
  | "grass"
  | "lime"
  | "blue"
  | undefined;

type BadgeStyle = { color?: ColorType; className?: string };

export const SkillBgColor = (skill: string): BadgeStyle => {
  switch (skill) {
    case "Next.js":
    case "GitHub":
      return {
        className: "bg-[var(--color-black)] text-[var(--color-bg)]",
      };
    case "React":
    case "TypeScript":
    case "MySQL":
      return { color: "blue" };
    case "Vite":
    case "Figma":
      return { color: "purple" };
    case "Zustand":
      return { color: "green" };
    case "TanStack Query":
      return { color: "ruby" };
    case "Git":
      return { color: "gray" };
    case "Firebase":
      return { color: "orange" };
    default:
      return { color: "amber" };
  }
};
