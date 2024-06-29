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
import CustomIcon from "./Custom/CustomIcon";
import { IconTargetArrow } from "@tabler/icons-react";
import TaskModal from "./Task/TaskModal";
import { useNode } from "@/hooks/use-node";
import { useErrorBoundary } from "react-error-boundary";

const Dashboard = () => {
  const items = useSelector(getTaskItems());
  const dispatch: AppDispatch = useDispatch();
  const { node, handleNode } = useNode();
  const { showBoundary } = useErrorBoundary();

  const handleModal = (taskId?: string) => {
    handleNode(<TaskModal key={_.uniqueId("task_modal_")} taskId={taskId} />);
  };

  const triggerError = () => {
    const err = new Error("ErrorBoundary: Task Error");
    showBoundary(err)
  }

  return (
    <Flex flex={1} direction="column" gap={4}>
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
          // onClick={() => handleModal()}
          onClick={() => triggerError()}
          leftIcon={<CustomIcon icon={IconTargetArrow} stroke="2" />}
          colorScheme="teal"
          bg="teal.400"
          variant="solid"
        >
          Task
        </Button>
      </Flex>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {!_.isEmpty(items) &&
          items.map((item) => (
            <TaskCard key={item.id} taskId={item.id} onClick={handleModal} />
          ))}
      </Grid>
    </Flex>
  );
};

export default Dashboard;
