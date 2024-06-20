import { Box, VStack, Link } from "@chakra-ui/react";

const SideMenu = () => {
  return (
    <Box
      w="250px"
      p={5}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        height: "100vh",
      }}
    >
      <VStack align="stretch" spacing={4}>
        <Link href="/home" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/about" style={{ textDecoration: "none" }}>
          About
        </Link>
        <Link href="/services" style={{ textDecoration: "none" }}>
          Services
        </Link>
        <Link href="/contact" style={{ textDecoration: "none" }}>
          Contact
        </Link>
      </VStack>
    </Box>
  );
};

export default SideMenu;
