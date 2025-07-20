import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import { MAX_W_SIZE } from "../../config/home";
import { data } from "../../data/Skills";
import { WhiteCard } from "../../shared/ui/WhiteCard";
import { SkillBgColor } from "../../utils/skills";

const Projects = () => {
  return (
    <Flex
      className="container gray"
      direction="column"
      align={"center"}
      py={"9"}
    >
      <Text as="div" size={"8"} weight={"bold"} mb={"5"} align="center">
        Projects
      </Text>
      <Text as="div" size="3" color="gray" weight={"medium"} mb={"4"}>
        다양한 기술 스택과 도구를 활용하여 개발합니다.
      </Text>

      <Flex className={`w-full max-w-[${MAX_W_SIZE}]`} gap={"6"}>
        {data.map((skill, i) => (
          <WhiteCard key={i}>
            <Flex
              className="bg-gradient rounded-full w-[4rem] h-[4rem] m-auto"
              align={"center"}
              justify={"center"}
            >
              {skill.icon}
            </Flex>

            <Text as="div" align={"center"} size={"5"} weight={"bold"} mt={"4"}>
              {skill.title}
            </Text>
            <Text
              as="div"
              align={"center"}
              size={"2"}
              color="gray"
              mt={"1"}
              mb={"5"}
            >
              {skill.description}
            </Text>

            <Box className="min-h-[10rem] flex-wrap">
              {skill.list.map((item) => (
                <Badge
                  key={item}
                  mr={"2"}
                  mb={"2"}
                  variant="soft"
                  {...SkillBgColor(item)}
                  size="2"
                  radius="full"
                >
                  {item}
                </Badge>
              ))}
            </Box>
          </WhiteCard>
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
