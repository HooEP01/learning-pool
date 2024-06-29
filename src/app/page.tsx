import SideNav from "@/components/Navigation/SideNav";
import DashboardSkeleton from "@/components/Skeleton/DashboardSkeleton";
import { Container } from "@chakra-ui/react";
import _ from "lodash";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "react-error-boundary";

const Card = dynamic(() => import("@/components/Card"), {
  ssr: false,
  loading: () => <DashboardSkeleton />,
});

export default function Home() {
  return (
    <Container
      maxW="container.lg"
      style={{ display: "flex", flexDirection: "row" }}
      gap="6"
      p="6"
      py="8"
    >
      <SideNav />
      <Card />
    </Container>
  );
}
