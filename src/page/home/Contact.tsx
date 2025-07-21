import { Flex, Text } from "@radix-ui/themes";

const Contact = () => {
  return (
    <Flex className="container" direction="column" align={"center"} py={"9"}>
      <Text as="div" size={"8"} weight={"bold"} mb={"4"} align="center">
        Contact
      </Text>
      <Text as="div" size="3" color="gray" weight={"medium"} mb={"4"}>
        여기까지 읽어주셔서 감사합니다 {":)"}
      </Text>
    </Flex>
  );
};

export default Contact;
