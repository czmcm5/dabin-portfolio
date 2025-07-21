import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import { data, data2 } from "../../data/Skills";
import { WhiteCard } from "../../shared/ui/WhiteCard";
import { SkillBgColor } from "../../utils/BadgeStyle";
import { MAX_W_SIZE, SUB_MAX_W_SIZE } from "../../config/home";
import { IconBadge } from "../../shared/ui/text";

const Skills = () => {
  return (
    <Flex
      className="container gray"
      direction="column"
      align={"center"}
      py={"9"}
    >
      <Text as="div" size={"8"} weight={"bold"} mb={"5"} align="center">
        Skills
      </Text>
      <Text as="div" size="3" color="gray" weight={"medium"} mb={"4"}>
        다양한 기술 스택과 도구를 활용하여 개발합니다.
      </Text>

      <Flex className={`w-full`} gap={"6"} maxWidth={MAX_W_SIZE}>
        {data.map((skill, i) => (
          <WhiteCard key={i}>
            <IconBadge m="auto">{skill.icon}</IconBadge>

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

      <Flex
        className={`w-full`}
        maxWidth={SUB_MAX_W_SIZE}
        gap={"4"}
        justify={"between"}
        my={"9"}
      >
        {data2.map((item) => (
          <Box>
            <Flex
              className="m-auto w-[3rem] h-[3rem]"
              align={"center"}
              justify={"center"}
            >
              {item.icon}
            </Flex>
            <Text size={"2"} weight={"medium"}>
              {item.title}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Skills;
