import { HoverText } from "../text";
import { MAX_W_SIZE } from "../../../config/home";
import { Box, Flex } from "@chakra-ui/react";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const TopBar = () => {
  return (
    <Box
      className="bg-bulr"
      zIndex={50}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      w="full"
      py={"1.5rem"}
      px={"1rem"}
      borderBottom="1px solid"
      borderColor="lightGray.500"
    >
      <Flex justify="space-between" maxWidth={MAX_W_SIZE} m="auto">
        <HoverText onClick={() => scrollToId("About")}>About</HoverText>
        <HoverText onClick={() => scrollToId("Education")}>Education</HoverText>
        <HoverText onClick={() => scrollToId("Experience")}>
          Experience
        </HoverText>
        <HoverText onClick={() => scrollToId("Skills")}>Skills</HoverText>
        <HoverText onClick={() => scrollToId("Projects")}>Projects</HoverText>
        <HoverText onClick={() => scrollToId("Blog")}>Blog</HoverText>
      </Flex>
    </Box>
  );
};

export default TopBar;
