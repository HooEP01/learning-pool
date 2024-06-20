import Dashboard from "@/components/Dashboard";
import SideMenu from "@/components/SideMenu";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
      maxW="container.lg"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <SideMenu />
      <Dashboard />
    </Container>
  );
}
