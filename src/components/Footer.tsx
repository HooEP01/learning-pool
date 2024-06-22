import { Box, Flex, Text } from "@chakra-ui/react";
import { IconCoffee } from "@tabler/icons-react";
import CustomIcon from "./Custom/CustomIcon";

const Footer = () => {
  return (
    <Box as="footer" width="full" color="white" p={3}>
      <Flex maxW="container.lg" m="auto" justify="start" align="center" gap="2">
        <CustomIcon icon={IconCoffee} />
        <Text fontSize="sm">Have a nice day | Copyright © 2024 </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
