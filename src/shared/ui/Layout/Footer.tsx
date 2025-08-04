import { Box, HStack, Text } from "@chakra-ui/react";
import { GitHubLogoIcon } from "../../../assets/Icon";
import { goSite } from "../../../utils/project";

const Footer = () => {
  return (
    <Box
      py="1.5rem"
      px="1rem"
      borderTop="1px solid"
      borderColor="lightGray.500"
    >
      <HStack justify="space-between">
        <Text fontSize={14} fontWeight="medium" color="gray">
          © 2025 YUN DABIN. All rights reserved.
        </Text>

        <GitHubLogoIcon
          cursor="pointer"
          onClick={() => goSite("https://github.com/czmcm5")}
        />
      </HStack>
    </Box>
  );
};

export default Footer;
