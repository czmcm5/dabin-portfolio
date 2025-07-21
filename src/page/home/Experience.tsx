import { Box, Flex, Text } from "@radix-ui/themes";
import { CalendarIcon } from "../../assets/Icon";
import { MAX_W_SIZE } from "../../config/home";
import { data } from "../../data/Experience";

import { WhiteCard } from "../../shared/ui/WhiteCard";
import {
  BulletText,
  CategoryDescription,
  CategoryText,
} from "../../shared/ui/text";

const Experience = () => {
  return (
    <Flex className="container gray" direction="column" align={"center"}>
      <CategoryText>Experience</CategoryText>
      <CategoryDescription>
        다양한 환경에서의 개발 경험을 통해 성장해왔습니다.
      </CategoryDescription>

      <Box className={`w-full`} maxWidth={MAX_W_SIZE}>
        {data.map((item, i) => (
          <WhiteCard key={i}>
            <Flex justify={"between"}>
              <Text size={"5"} weight={"bold"}>
                {item.company}
              </Text>
              <Flex align={"center"} gap={"2"}>
                <CalendarIcon color="gray" />
                <Text color="gray" size={"2"}>
                  {item.period}
                </Text>
              </Flex>
            </Flex>

            <Text color="gray" size={"2"}>
              {item.position}
            </Text>

            <Text as="div" color="gray" my={"4"}>
              {item.description}
            </Text>

            <Text as="div" size={"4"} weight={"bold"} mb={"2"}>
              주요 성과
            </Text>
            {item.achievements.map((item, i) => (
              <BulletText key={i}>{item}</BulletText>
            ))}
          </WhiteCard>
        ))}
      </Box>
    </Flex>
  );
};

export default Experience;
