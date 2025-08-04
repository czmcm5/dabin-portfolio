import { Button } from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  NotionLogoIcon,
} from "../../assets/Icon";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  size?: "3" | "1" | "2" | "4";
}

export const DemoBtn = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={"outlineGray"}
      color={"gray"}
      fontSize={14}
      gap={2}
    >
      <ExternalLinkIcon />
      {children}
    </Button>
  );
};

export const GithubBtn = ({ children, onClick }: ButtonProps) => {
  return (
    <Button variant="black" onClick={onClick} mr={"2"} fontSize={14} gap={2}>
      <GitHubLogoIcon color="white" />
      {children}
    </Button>
  );
};

export const NotionBtn = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="outlineGray"
      fontSize={14}
      gap={2}
      mr={"2"}
    >
      <NotionLogoIcon />
      {children}
    </Button>
  );
};
