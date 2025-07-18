import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import { data } from "../../data/AboutMe";

const AboutMe = () => {
  return (
    <Flex
      className="container"
      direction="column"
      align={"center"}
      py={"9"}
      my={"9"}
    >
      <Text as="div" size={"8"} weight={"bold"} mb={"5"} align="center">
        About Me
      </Text>
      <Flex maxWidth={"800px"}>
        <Box className="flex-1" m={"auto"}>
          <Text as="div" size="3" color="gray" weight={"medium"} mb={"4"}>
            {data.interview1}
          </Text>
          <Text as="div" size="3" color="gray" weight={"medium"} mb={"4"}>
            {data.interview2}
          </Text>
          <Flex gap={"2"}>
            {data.skills.map((skill, i) => (
              <Badge key={i} variant="soft" color="gray" size="2" radius="full">
                {skill}
              </Badge>
            ))}
          </Flex>
        </Box>
        <Flex className="flex-1" direction="column" align={"center"}>
          <Box
            className="border-4 border-transparent rounded-full overflow-hidden blue-border"
            width={"16rem"}
            height={"16rem"}
          >
            <img
              src="https://avatars.githubusercontent.com/u/116141225?v=4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
