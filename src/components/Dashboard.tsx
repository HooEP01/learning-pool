"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Grid,
  Heading,
} from "@chakra-ui/react";
import TaskCard from "./Task/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { getTaskItems } from "@/selectors/task";
import { AppDispatch } from "@/store";
import _ from "lodash";
import CustomIcon from "./CustomIcon";
import { IconTargetArrow } from "@tabler/icons-react";
import TaskModal from "./Task/TaskModal";
import { useNode } from "@/hooks/use-node";

const Dashboard = () => {
  const items = useSelector(getTaskItems());
  const dispatch: AppDispatch = useDispatch();
  const { node, handleNode } = useNode();

  const handleModal = (taskId?: string) => {
    handleNode(<TaskModal key={_.uniqueId("task_modal_")} taskId={taskId} />);
  };

  return (
    <Box flex={1} p={5}>
      <Flex direction="column" gap={4}>
        {node}

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Tasks</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex justify={"space-between"} align={"center"}>
          <Heading as="h2" size="lg" noOfLines={1}>
            Task
          </Heading>
          <Button
            onClick={() => handleModal()}
            leftIcon={<CustomIcon icon={IconTargetArrow} stroke="2" />}
            colorScheme="teal"
            bg="teal.400"
            variant="solid"
          >
            Task
          </Button>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {!_.isEmpty(items) &&
            items.map((item) => (
              <TaskCard key={item.id} taskId={item.id} onClick={handleModal} />
            ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Dashboard;
