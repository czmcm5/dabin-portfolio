import {
  CaretSortIcon,
  GlobeIcon,
  ChatBubbleIcon,
  CropIcon,
  DimensionsIcon,
} from "../assets/Icon";

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
    icon: <GlobeIcon color="white" className="w-[35px] h-[35px]" />,
    description: "서버 사이드 개발 경험",
    list: ["Next.js", "Firebase", "MySQL"],
  },
  {
    title: "협업/툴",
    icon: <ChatBubbleIcon color="white" className="w-[32px] h-[32px]" />,
    description: "개발 도구 및 협업",
    list: ["Git", "GitHub", "Figma"],
  },
];

export const data2 = [
  {
    title: "Clean Code",
    icon: (
      <CaretSortIcon className="w-[45px] h-[45px] text-[var(--color-primary)]  transform rotate-90" />
    ),
  },
  {
    title: "UI/UX Design",
    icon: (
      <CropIcon className="w-[35px] h-[35px] text-[var(--color-primary)]" />
    ),
  },
  {
    title: "Responsive",
    icon: (
      <DimensionsIcon className="w-[35px] h-[35px] text-[var(--color-primary)]" />
    ),
  },
  {
    title: "Web Standards",
    icon: (
      <GlobeIcon className="w-[35px] h-[35px] text-[var(--color-primary)]" />
    ),
  },
];
