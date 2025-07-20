import { Button } from "@radix-ui/themes";
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  NotionLogoIcon,
} from "../../assets/Icon";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export const DemoBtn = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="cursor-pointer"
      variant="outline"
      color="gray"
    >
      <ExternalLinkIcon />
      {children}
    </Button>
  );
};

export const GithubBtn = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="bg-[var(--color-black)] text-[var(--color-bg)] cursor-pointer"
      mr={"2"}
    >
      <GitHubLogoIcon color="white" />
      {children}
    </Button>
  );
};

export const NotionBtn = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="text-[var(--slate-a12)] cursor-pointer"
      variant="outline"
      color="gray"
      mr={"2"}
    >
      <NotionLogoIcon />
      {children}
    </Button>
  );
};
