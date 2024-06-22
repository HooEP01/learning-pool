"use client";
import { Box, VStack, useBreakpointValue } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { LinkItems } from "@/constant";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideNav = () => {
  const pathname = usePathname();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      w={{ base: "full", md: "72" }}
      h="full"
      style={{
        justifyContent: "center",
        alignItems: "start",
      }}
      display={{ base: isMobile ? "none" : "flex", md: "flex" }}
    >
      <VStack align="stretch" spacing={4} h="full" w="full">
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            href={link.href}
            pathname={pathname}
          >
            {link.name}
          </NavItem>
        ))}
      </VStack>
    </Box>
  );
};

export default SideNav;
