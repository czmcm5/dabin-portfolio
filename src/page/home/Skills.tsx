import { Flex, Text } from "@radix-ui/themes";
import { WhiteCard } from "../../shared/ui/WhiteCard";

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
        {[1, 2, 3].map((_, i) => (
          <WhiteCard key={i}>dd</WhiteCard>
        ))}
      </Flex>
    </Flex>
  );
};

export default Skills;
