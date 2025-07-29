import { FaMobileAlt, FaPalette } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { FiTool } from "react-icons/fi";

export const data = [
  {
    title: "Fornt-end",
    icon: <FaCode size={30} color="white" />,
    description: "사용자 인터페이스 개발",
    skills: [
      { skill: "React", color: "blue" },
      { skill: "TypeScript", color: "blue" },
      { skill: "JavaScript", color: "yellow" },
      { skill: "Vite", color: "purple" },
      { skill: "Zustand", color: "green" },
      { skill: "TanStack Query", color: "peach" },
    ],
  },
  {
    title: "Back-end",
    icon: <IoIosGlobe size={35} color="white" />,
    description: "서버 사이드 개발 경험",
    skills: [
      { skill: "Next.js", color: "black" },
      { skill: "Firebase", color: "peach" },
      { skill: "MySQL", color: "blue" },
    ],
  },
  {
    title: "협업/툴",
    icon: <FiTool size={30} color="white" />,
    description: "개발 도구 및 협업",
    skills: [
      { skill: "Git", color: "gray" },
      { skill: "GitHub", color: "black" },
      { skill: "Figma", color: "purple" },
    ],
  },
];

export const data2 = [
  {
    title: "Clean Code",
    icon: <FaCode size={35} color="#fbbf24" />,
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette size={35} color="#fbbf24" />,
  },
  {
    title: "Responsive",
    icon: <FaMobileAlt size={35} color="#fbbf24" />,
  },
  {
    title: "Web Standards",
    icon: <IoIosGlobe size={40} color="#fbbf24" />,
  },
];
