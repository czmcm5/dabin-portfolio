import { Button } from "@radix-ui/themes";
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

export const DemoBtn = ({ children, onClick, size = "2" }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="cursor-pointer"
      variant="outline"
      color="gray"
      size={size}
    >
      <ExternalLinkIcon />
      {children}
    </Button>
  );
};

export const GithubBtn = ({ children, onClick, size = "2" }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="bg-[var(--color-black)] text-[var(--color-bg)] cursor-pointer"
      mr={"2"}
      size={size}
    >
      <GitHubLogoIcon color="white" />
      {children}
    </Button>
  );
};

export const NotionBtn = ({ children, onClick, size = "2" }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="text-[var(--slate-a12)] cursor-pointer"
      variant="outline"
      color="gray"
      mr={"2"}
      size={size}
    >
      <NotionLogoIcon />
      {children}
    </Button>
  );
};
