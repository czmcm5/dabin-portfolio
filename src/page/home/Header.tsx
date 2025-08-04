import { Flex, Text, Box, Button } from "@chakra-ui/react";
import TypingEffext from "../../compoent/Header/TypingEffext";
import { data } from "../../data/Header";
import { scrollToId } from "../../utils/page";

const Header = () => {
  return (
    <Flex className="container" direction="column" align="center" py={9}>
      <Box my={9} />
      <Text mt={9} variant="lgTitle">
        안녕하세요 ,
      </Text>

      <Flex wrap="wrap" align="center" justify="center" mb={4}>
        <TypingEffext text="프론트엔드 개발자" />
        <Text variant="lgTitle">윤다빈 입니다</Text>
      </Flex>

      <Box pos="relative" mb={2}>
        <Text variant="xsTitle" pos="relative" zIndex={10}>
          함께 하면 더 멀리 갈 수 있다고 믿는 개발자
        </Text>
        <Box
          zIndex={0}
          pos="absolute"
          top="65%"
          left={0}
          w="full"
          h="10px"
          bg="yellow.200"
        />
      </Box>

      <Text variant="lgDescription">{data.subTitle1}</Text>
      <Text variant="lgDescription">{data.subTitle2}</Text>

      <Button variant="black" mt={5} onClick={() => scrollToId("Projects")}>
        프로젝트 보기
      </Button>
    </Flex>
  );
};

export default Header;
