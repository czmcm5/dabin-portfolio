import { Box, Flex, Text } from "@chakra-ui/react";
import { MAX_W_SIZE } from "../../config/home";
import { data } from "../../data/Experience";

import { PiDotOutlineFill } from "react-icons/pi";
import { WhiteCard } from "../../shared/ui/WhiteCard";

const Experience = () => {
  return (
    <Flex className="container gray" direction="column" align="center" py={20}>
      <Text variant="title" mb={6}>
        Experience
      </Text>
      <Text variant="description" mb={4}>
        경력
      </Text>

      <Box w={"full"} maxWidth={MAX_W_SIZE}>
        {data.map((item, i) => (
          <WhiteCard key={i}>
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              justify="space-between"
            >
              <Text variant="xsTitle">{item.company}</Text>
              <Text variant="smDescription">{item.period}</Text>
            </Flex>
            <Text variant="smDescription" mb={4}>
              {item.description}
            </Text>

            {item.achievements.map((item, i) => (
              <Text key={i} fontSize={14} color="gray" mb={"1"}>
                <Flex align={"center"}>
                  <PiDotOutlineFill style={{ color: "#fbbf24" }} /> {item}
                </Flex>
              </Text>
            ))}
          </WhiteCard>
        ))}
      </Box>
    </Flex>
  );
};

export default Experience;
