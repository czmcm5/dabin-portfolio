import { Button, Flex, Text } from "@radix-ui/themes";
import { data } from "../../data/Header";

const Header = () => {
  return (
    <Flex className="container" direction="column" align={"center"} py={"9"}>
      <Text as="div" size={"9"} weight={"bold"} mb={"4"} align="center">
        {data.title}
      </Text>
      <Text as="div" size="5" color="gray" align="center" weight={"medium"}>
        {data.subTitle1}
      </Text>
      <Text as="div" size="5" color="gray" align="center" weight={"medium"}>
        {data.subTitle2}
      </Text>
      <Button className=" bg-[#1d1d1d] cursor-pointer" size="4" mt={"5"}>
        프로젝트 보기
      </Button>
    </Flex>
  );
};

export default Header;
