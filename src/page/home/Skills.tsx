import { CaretSortIcon } from "@radix-ui/react-icons";
import { Badge, Flex, Text } from "@radix-ui/themes";
import { data } from "../../data/Skills";
import { WhiteCard } from "../../shared/ui/WhiteCard";
import { SkillBgColor } from "../../utils/skills";

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

      <Flex className="w-full max-w-[1000px]" gap={"4"}>
        {data.map((skill, i) => (
          <WhiteCard key={i}>
            <Flex
              className="bg-gradient rounded-full"
              width={"4rem"}
              height={"4rem"}
              align={"center"}
              justify={"center"}
              m={"auto"}
            >
              {skill.icon}
            </Flex>

            <Text as="div" align={"center"} size={"5"} weight={"bold"}>
              {skill.title}
            </Text>
            <Text as="div" align={"center"} size={"2"} color="gray" my={"2"}>
              {skill.description}
            </Text>
            {skill.list.map((item) => (
              <Badge
                key={item}
                mt={"3"}
                mr={"3"}
                variant="soft"
                {...SkillBgColor(item)}
                size="2"
                radius="full"
              >
                {item}
              </Badge>
            ))}
          </WhiteCard>
        ))}
      </Flex>
    </Flex>
  );
};

export default Skills;
