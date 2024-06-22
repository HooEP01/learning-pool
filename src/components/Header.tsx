"use client";
import {
  Box,
  Collapse,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import CustomIcon from "./Custom/CustomIcon";
import MobileNav from "./Navigation/MobileNav";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="teal.500">
      <Flex
        align="center"
        justify="space-between"
        py="2"
        px="6"
        maxW="container.lg"
        w="full"
        m="auto"
      >
        <Flex align="center" mr={5}>
          <Heading size="sm">LearningPool</Heading>
        </Flex>

        <Box display={{ base: isMobile ? "block" : "none", md: "none"}}>
          {isMobile && <MobileNav />}
        </Box>

        <Box
          display={{ base: !isMobile ? "block" : "none", md: "flex" }}
          alignItems="center"
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link
              href="#home"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{ bg: "teal.600" }}
            >
              <CustomIcon />
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
