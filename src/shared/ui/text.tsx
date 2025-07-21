import { Flex, Text } from "@radix-ui/themes";
import { DotFilledIcon } from "../../assets/Icon";
import type { JSX, ReactNode } from "react";

export const CategoryText = ({ children }: { children: string }) => {
  return (
    <Text as="div" size={"8"} weight={"bold"} mt={"9"} mb={"4"} align="center">
      {children}
    </Text>
  );
};

export const CategoryDescription = ({ children }: { children: string }) => {
  return (
    <Text as="div" size="3" color="gray" weight={"medium"} mb={"4"}>
      {children}
    </Text>
  );
};

export const BulletText = ({
  children,
  color = "var(--color-primary)",
}: {
  children: string;
  color?: string;
}): JSX.Element => {
  return (
    <Text as="div" className="p-0" size={"2"} color="gray" mb={"1"}>
      <Flex align={"center"}>
        <DotFilledIcon className="w-[18px] h-[18px]" color={color} /> {children}
      </Flex>
    </Text>
  );
};

export const IconBadge = ({
  children,
  size = "4rem",
  m = "",
}: {
  children: ReactNode;
  size?: string;
  m?: "auto" | "";
}): JSX.Element => {
  return (
    <Flex
      className={`bg-gradient rounded-full w-[${size}] h-[${size}] m-${m}`}
      align={"center"}
      justify={"center"}
    >
      {children}
    </Flex>
  );
};
