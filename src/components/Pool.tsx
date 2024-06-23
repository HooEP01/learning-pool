"use client";
import { useNode } from "@/hooks/use-node";
import { getPoolTaskItems } from "@/selectors/task";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import TaskModal from "./Task/TaskModal";
import _ from "lodash";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Grid,
  Heading,
} from "@chakra-ui/react";
import TaskCard from "./Task/TaskCard";

const Pool = () => {
  const items = useSelector(getPoolTaskItems());
  const dispatch: AppDispatch = useDispatch();
  const { node, handleNode } = useNode();

  const handleModal = (taskId?: string) => {
    handleNode(<TaskModal key={_.uniqueId("task_modal_")} taskId={taskId} />);
  };

  return (
    <Flex flex={1} direction="column" gap={4}>
      {node}

      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Pools</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex justify={"space-between"} align={"center"}>
        <Heading as="h2" size="lg" noOfLines={1}>
          Learning Pools
        </Heading>
        {/* <Button
          onClick={() => handleModal()}
          leftIcon={<CustomIcon icon={IconTargetArrow} stroke="2" />}
          colorScheme="teal"
          bg="teal.400"
          variant="solid"
        >
          Task
        </Button> */}
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

export default Pool;
