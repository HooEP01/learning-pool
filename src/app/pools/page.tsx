import SideNav from "@/components/Navigation/SideNav";
import PoolSkeleton from "@/components/Skeleton/PoolSkeleton";
import { Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Pool = dynamic(() => import("@/components/Pool"), {
  ssr: false,
  loading: () => <PoolSkeleton />,
});

const PoolPage = () => {
  return (
    <Container
      maxW="container.lg"
      style={{ display: "flex", flexDirection: "row" }}
      gap="6"
      p="6"
      py="8"
    >
      <SideNav />
      <Pool />
    </Container>
  );
};

export default PoolPage;
