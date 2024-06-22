import SideNav from "@/components/Navigation/SideNav";
import CardSkeleton from "@/components/Skeleton/CardSkeleton";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
} from "@chakra-ui/react";
import _ from "lodash";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/components/Dashboard"), {
  ssr: false,
  loading: () => {
    return (
      <Box flex={1}>
        <Flex direction="column" gap={4}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Tasks</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={6}
          >
            {_.times(5).map(() => (
              <CardSkeleton key={_.uniqueId("dashboard_card_skeleton_")} />
            ))}
          </Grid>
        </Flex>
      </Box>
    );
  },
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
      <Dashboard />
    </Container>
  );
}
