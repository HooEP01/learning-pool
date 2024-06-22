import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Grid,
} from "@chakra-ui/react";
import CardSkeleton from "./CardSkeleton";
import _ from "lodash";

const DashboardSkeleton = () => {
  return (
    <Flex flex={1} direction="column" gap={4}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Tasks</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {_.times(5).map(() => (
          <CardSkeleton key={_.uniqueId("dashboard_card_skeleton_")} />
        ))}
      </Grid>
    </Flex>
  );
};

export default DashboardSkeleton;
