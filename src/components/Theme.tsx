"use client";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

const Theme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={
        colorMode === "light" ? <IconMoon size={18} /> : <IconSun size={18} />
      }
      onClick={toggleColorMode}
      size="sm"
    />
  );
};

export default Theme;
