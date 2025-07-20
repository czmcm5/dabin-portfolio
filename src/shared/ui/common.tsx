import { Flex, Text } from "@radix-ui/themes";
import { DotFilledIcon } from "../../assets/Icon";
import type { JSX } from "react";

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
