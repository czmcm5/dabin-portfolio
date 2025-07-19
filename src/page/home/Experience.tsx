import { Box, Flex, Text } from "@radix-ui/themes";
import { data } from "../../data/Experience";
import { WhiteCard } from "../../shared/ui/WhiteCard";
import {
  BackpackIcon,
  CalendarIcon,
  DotFilledIcon,
  SewingPinIcon,
} from "../../style/Icon";

const Experience = () => {
  return (
    <Flex
      className="container gray"
      direction="column"
      align={"center"}
      py={"9"}
    >
      <Text as="div" size={"8"} weight={"bold"} mb={"4"} align="center">
        Experience
      </Text>
      <Text as="div" size="3" color="gray" weight={"medium"} mb={"4"}>
        다양한 환경에서의 개발 경험을 통해 성장해왔습니다.
      </Text>

      <Box className="w-full max-w-[1000px]">
        {data.map((item, i) => (
          <WhiteCard key={i}>
            <Flex justify={"between"} mb={"4"}>
              <Box>
                <Text size={"5"} weight={"bold"}>
                  {item.company}
                </Text>
                <Flex align={"center"} gap={"2"}>
                  <BackpackIcon color="gray" />
                  <Text color="gray" size={"2"}>
                    {item.position}
                  </Text>
                </Flex>
              </Box>
              <Flex direction={"column"} align={"end"}>
                <Flex align={"center"} gap={"2"}>
                  <CalendarIcon color="gray" />
                  <Text color="gray" size={"2"}>
                    {item.period}
                  </Text>
                </Flex>
                <Flex align={"center"} gap={"2"}>
                  <SewingPinIcon color="gray" />
                  <Text color="gray" size={"2"}>
                    {item.location}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Text as="div" color="gray" mb={"4"}>
              {item.description}
            </Text>

            <Text as="div" size={"4"} weight={"bold"} mb={"2"}>
              주요 성과
            </Text>
            {item.achievements.map((item, i) => (
              <Text as="div" className="p-0" size={"3"} color="gray" key={i}>
                <DotFilledIcon color="var(--color-primary)" /> {item}
              </Text>
            ))}
          </WhiteCard>
        ))}
      </Box>
    </Flex>
  );
};

export default Experience;
