import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { educationData } from "../../data/Education";

const Education = () => {
  return (
    <Flex className="container" direction="column" align={"center"} py={"20"}>
      <Text variant="title">Education</Text>
      <Text variant="description">학력/교육</Text>

      <Box w={"full"} maxWidth={"600px"} mt={4}>
        {educationData.map((item, i) => (
          <Box
            key={i}
            p={4}
            mb={4}
            border={"1px solid"}
            borderColor={"lightGray.400"}
            borderRadius={8}
          >
            <HStack justify="space-between">
              <Text variant="xxsTitle">{item.name}</Text>
              <Text variant="xsDescription">{item.period}</Text>
            </HStack>

            <HStack justify="space-between">
              <Text variant="xsDescription">{item.course}</Text>
              <Badge variant="blue">{item.stauts}</Badge>
            </HStack>

            {item.description && (
              <Text variant="smDescription" mt={"2"}>
                {item.description}
              </Text>
            )}
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default Education;
