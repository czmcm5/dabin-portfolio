import { Box, Button, Flex, Text } from "@radix-ui/themes";
import TypingEffext from "../../compoent/Header/useTypingEffext";
import { data } from "../../data/Header";
import { mediaText } from "../../utils/media";

const ORIGIN_SIZE = 60;
const MOBILE_SIZE = 40;

const Header = () => {
  return (
    <div className="flex-container">
      <Flex className="container" direction="column" align="center" py={"9"}>
        <Box my={"9"} />
        <Text
          as="div"
          className={mediaText(ORIGIN_SIZE, MOBILE_SIZE)}
          weight="bold"
          mt="9"
          align="center"
        >
          안녕하세요 ,
        </Text>

        <Flex
          className={mediaText(ORIGIN_SIZE, MOBILE_SIZE)}
          wrap={"wrap"}
          align={"center"}
          justify={"center"}
        >
          <TypingEffext text="프론트엔드 개발자" />
          <Text as="div" weight="bold" align="center">
            윤다빈 입니다
          </Text>
        </Flex>

        <Text
          className="relative inline-block"
          as="div"
          size="5"
          align="center"
          weight={"medium"}
          mt={"4"}
          mb={"2"}
        >
          <span className="relative z-10 ">
            함께 하면 더 멀리 갈 수 있다고 믿는 개발자
          </span>
          <span className="absolute left-[0] top-[65%] h-[10px] w-full bg-[#fff5c9] z-0" />
        </Text>

        <Text as="div" color="gray" align="center" weight={"medium"}>
          {data.subTitle1}
        </Text>
        <Text as="div" color="gray" align="center" weight={"medium"}>
          {data.subTitle2}
        </Text>

        <Button className="bg-[#1d1d1d] cursor-pointer" size="4" mt={"5"}>
          프로젝트 보기
        </Button>
      </Flex>
    </div>
  );
};

export default Header;
