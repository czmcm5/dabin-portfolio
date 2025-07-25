import { Flex, Text } from "@radix-ui/themes";
import { GitHubLogoIcon } from "../../../assets/Icon";
import { goSite } from "../../../utils/project";

const Footer = () => {
  return (
    <div className="border-t border-[var(--color-gray)] py-[1.5rem] px-[1rem]">
      <Flex justify={"between"} align={"center"}>
        <Text size={"2"} weight={"medium"} color="gray">
          © 2025 YUN DABIN. All rights reserved.
        </Text>

        <GitHubLogoIcon
          cursor="pointer"
          onClick={() => goSite("https://github.com/czmcm5")}
        />
      </Flex>
    </div>
  );
};

export default Footer;
