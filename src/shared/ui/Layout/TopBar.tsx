import { Box, Flex } from "@radix-ui/themes";
import { HoverText } from "../text";
import { MAX_W_SIZE } from "../../../config/home";

const TopBar = () => {
  return (
    <Box className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[var(--color-gray)] py-[1.5rem] px-[1rem] bg-bulr">
      <Flex
        justify={"between"}
        align={"center"}
        maxWidth={MAX_W_SIZE}
        m={"auto"}
      >
        <HoverText>About</HoverText>
        <HoverText>Education</HoverText>
        <HoverText>Experience</HoverText>
        <HoverText>Skills</HoverText>
        <HoverText>Projects</HoverText>
        <HoverText>Blog</HoverText>
      </Flex>
    </Box>
  );
};

export default TopBar;
