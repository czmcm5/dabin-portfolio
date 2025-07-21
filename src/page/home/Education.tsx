import { Badge, Box, Card, Flex, Text } from "@radix-ui/themes";

import { educationData } from "../../data/Education";
import { CategoryDescription, CategoryText } from "../../shared/ui/text";

const Education = () => {
  return (
    <Flex className="container" direction="column" align={"center"} pb={"9"}>
      <CategoryText>Education</CategoryText>
      <CategoryDescription>학력/교육</CategoryDescription>

      <Box className={`w-full`} maxWidth={"600px"}>
        {educationData.map((item, i) => (
          <Card key={i} mb="4">
            <Flex justify={"between"}>
              <Text weight={"bold"}>{item.name}</Text>
              <Text color="gray" size={"1"}>
                {item.period}
              </Text>
            </Flex>

            <Flex justify={"between"}>
              <Text as="div" color="gray" size={"2"}>
                {item.course}
              </Text>
              <Badge variant="soft" color="blue" size="1" radius="full">
                {item.stauts}
              </Badge>
            </Flex>

            {item.description && (
              <Text as="div" color="gray" size={"2"} mt={"2"}>
                {item.description}
              </Text>
            )}
          </Card>
        ))}
      </Box>
    </Flex>
  );
};

export default Education;
