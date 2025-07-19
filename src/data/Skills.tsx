import { CaretSortIcon } from "@radix-ui/react-icons";

export const data = [
  {
    title: "Fornt-end",
    icon: (
      <CaretSortIcon
        color="white"
        className="w-[45px] h-[45px] transform rotate-90"
      />
    ),
    description: "사용자 인터페이스 개발",
    list: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    title: "Back-end",
    description: "서버 사이드 개발 경험",
    list: ["Next.js", "Firebase", "MySQL"],
  },
  {
    title: "Fornt-end",
    description: "사용자 인터페이스 개발",
    list: ["Git", "GitHub", "Figma"],
  },
];
