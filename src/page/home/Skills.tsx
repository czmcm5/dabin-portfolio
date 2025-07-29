import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { MAX_W_SIZE, SUB_MAX_W_SIZE } from "../../config/home";
import { data, data2 } from "../../data/Skills";
import { WhiteCard } from "../../shared/ui/WhiteCard";

const Skills = () => {
  return (
    <Flex className="container gray" direction="column" align="center" py={20}>
      <Text variant="title" mb={6}>
        Skills
      </Text>
      <Text variant="description" mb={4}>
        기술 스택
      </Text>

      <Flex
        flexDir={{ base: "column", lg: "row" }}
        w="full"
        maxW={MAX_W_SIZE}
        minH="22rem"
        gap={6}
      >
        {data.map((skill, i) => (
          <WhiteCard key={i} hoverEvent={true}>
            <Flex
              className="bg-gradient"
              align="center"
              justify="center"
              w="4rem"
              h="4rem"
              m="auto"
              borderRadius="50%"
            >
              {skill.icon}
            </Flex>

            <Text variant="xsTitle" align="center" mt={4}>
              {skill.title}
            </Text>
            <Text variant="smDescription" align="center" mt={1} mb={5}>
              {skill.description}
            </Text>

            <HStack wrap="wrap">
              {skill.skills.map((item) => (
                <Badge key={item.skill} variant={item.color} mr={2} mb={2}>
                  {item.skill}
                </Badge>
              ))}
            </HStack>
          </WhiteCard>
        ))}
      </Flex>

      <HStack justify="space-between" w="full" maxWidth={SUB_MAX_W_SIZE} my={9}>
        {data2.map((item) => (
          <Box key={item.title}>
            <Flex align="center" justify="center">
              {item.icon}
            </Flex>
            <Text mt={2} fontSize={14} fontWeight="bold">
              {item.title}
            </Text>
          </Box>
        ))}
      </HStack>
    </Flex>
  );
};

export default Skills;
