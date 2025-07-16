import {
  BackpackIcon,
  CalendarIcon,
  SewingPinIcon,
} from "@radix-ui/react-icons";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { data } from "../../data/Experience";

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
          <Card className="w-full" key={i} size={"3"}>
            <Flex justify={"between"} mb={"4"}>
              <Box>
                <Text size={"5"} weight={"bold"}>
                  {item.company}
                </Text>
                <Flex align={"center"} gap={"2"}>
                  <BackpackIcon />
                  <Text color="gray" size={"2"}>
                    {item.position}
                  </Text>
                </Flex>
              </Box>
              <Flex direction={"column"} align={"end"}>
                <Flex align={"center"} gap={"2"}>
                  <CalendarIcon />
                  <Text color="gray" size={"2"}>
                    {item.period}
                  </Text>
                </Flex>
                <Flex align={"center"} gap={"2"}>
                  <SewingPinIcon />
                  <Text color="gray" size={"2"}>
                    {item.location}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Text color="gray">{item.description}</Text>
          </Card>
        ))}
      </Box>
    </Flex>
  );
};

export default Experience;
