import { Box, Flex, Grid } from "@chakra-ui/react";
import TaskCard from "./TaskCard";

const Dashboard = () => {
  return (
    <Box flex={1} p={5}>
      <Flex direction="column" gap={4}>
        <h1>Dashboard</h1>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Grid>
      </Flex>
    </Box>
  );
};

export default Dashboard;
