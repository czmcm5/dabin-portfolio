import { Box, Flex, Text } from "@radix-ui/themes";
import { BackpackIcon, CalendarIcon, SewingPinIcon } from "../../assets/Icon";
import { MAX_W_SIZE } from "../../config/home";
import { data } from "../../data/Experience";
import { BulletText } from "../../shared/ui/common";
import { WhiteCard } from "../../shared/ui/WhiteCard";

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

      <Box className={`w-full`} maxWidth={MAX_W_SIZE}>
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
              <BulletText key={i}>{item}</BulletText>
            ))}
          </WhiteCard>
        ))}
      </Box>
    </Flex>
  );
};

export default Experience;
