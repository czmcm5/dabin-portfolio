import { Box } from "@chakra-ui/react";

export const WhiteCard = ({
  children,
  mb,
  hoverEvent = false,
}: {
  children: React.ReactNode;
  mb?: string;
  hoverEvent?: boolean;
}) => {
  return (
    <Box
      {...(hoverEvent && { className: "custom-Card" })}
      w="full"
      p={4}
      mb={mb || ""}
      bg="white"
      border="1px solid"
      borderColor="yellow.500"
      borderRadius={8}
    >
      {children}
    </Box>
  );
};
