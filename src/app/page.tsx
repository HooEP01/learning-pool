import SideMenu from "@/components/SideMenu";
import { Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/components/Dashboard"), {
  ssr: false,
});

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
