import type { JSX } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { PiDotOutlineFill } from "react-icons/pi";

export const CategoryText = ({ children }: { children: string }) => {
  return (
    <Text fontWeight={"bold"} mt={"9"} mb={"4"} align="center">
      {children}
    </Text>
  );
};

export const CategoryDescription = ({ children }: { children: string }) => {
  return (
    <Text color="gray" fontWeight={"medium"} mb={"4"}>
      {children}
    </Text>
  );
};

export const BulletText = ({
  children,
  color = "#fbbf24",
}: {
  children: string;
  color?: string;
}): JSX.Element => {
  return (
    <Flex align={"center"}>
      <Box>
        <PiDotOutlineFill style={{ color }} />
      </Box>
      <Text variant="smDescription" mb={"1"}>
        {children}
      </Text>
    </Flex>
  );
};

export const HoverText = ({ children }: { children: string }) => {
  return (
    <Text
      className="cursor-pointer hover:text-black hover:scale-108 transition"
      size={"2"}
      fontWeight={"medium"}
    >
      {children}
    </Text>
  );
};
