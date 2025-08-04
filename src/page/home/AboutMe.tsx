import { Badge, Box, Flex, Img, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Flex
      as="section"
      id="About"
      className="container"
      direction="column"
      align={"center"}
      py={"20"}
    >
      <Text variant={"title"} mb={"5"}>
        About Me
      </Text>
      <Flex
        maxWidth={"800px"}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        gap={8}
      >
        <Box flex={1} flexDirection={"column"} m={"auto"}>
          <Box mb={4} fontWeight={"medium"} color={"gray"}>
            <Text as={"span"} variant={"highlightBlack"}>
              2년차 프론트엔드 개발자
            </Text>
            <Text as={"span"}>
              {`로 프론트엔드와 관련된 인프라 설정부터 컴포넌트 설계, API 통신, 상태관리까지 전체 흐름을 직접 설계하고 개선해왔습니다.

실제 서비스에서 기획부터 개발 및 배포까지 `}
            </Text>
            <Text as={"span"} variant={"highlightBlack"}>
              전 과정을 리딩
            </Text>
            <Text as={"span"}>
              {`한 경험이 있습니다 빠르게 반복되는 요구사항에도 유연하게 대응하고 유지보수성과 확장성을 고려하며 개발합니다.

팀 내 협업과 클라이언트와의 커뮤니케이션이 얼마나 중요한지를 느꼈으며 이를 통해 자연스럽게 
`}
            </Text>
            <Text as={"span"} variant={"highlightBlack"}>
              조율과 소통
            </Text>
            <Text as={"span"}>에 대한 역량을 키웠습니다.</Text>
          </Box>
          <Flex gap={"2"}>
            {["#주도적인", "#꼼꼼한", "#커뮤니케이션_중시"].map((skill, i) => (
              <Badge key={i}>{skill}</Badge>
            ))}
          </Flex>
        </Box>

        <Flex flex={1} direction="column" align={"center"}>
          <Box
            className="theme-border"
            width={"100%"}
            maxW={"16rem"}
            aspectRatio={"1/1"}
            overflow={"hidden"}
          >
            <Img
              src="https://avatars.githubusercontent.com/u/116141225?v=4"
              w={"100%"}
              height={"100%"}
              objectFit={"cover"}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
