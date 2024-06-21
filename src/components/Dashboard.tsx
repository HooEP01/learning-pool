"use client";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import TaskCard from "./Task/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { getTaskItems } from "@/selectors/task";
import { AppDispatch } from "@/store";
import _ from "lodash";
import CustomIcon from "./CustomIcon";
import { IconTargetArrow } from "@tabler/icons-react";
import { ReactNode, useState } from "react";
import TaskModal from "./Task/TaskModal";

const Dashboard = () => {
  const items = useSelector(getTaskItems());
  const dispatch: AppDispatch = useDispatch();
  const [modal, setModal] = useState<ReactNode>(null);

  const handleModal = () => {
    setModal(<TaskModal key={_.uniqueId('task_modal_')} />);
  };

  return (
    <Box flex={1} p={5}>
      <Flex direction="column" gap={4}>
        <h1>Dashboard</h1>

        {modal}

        <Flex justify="left">
          <Button
            onClick={handleModal}
            leftIcon={<CustomIcon icon={IconTargetArrow} stroke="2" />}
            colorScheme="teal"
            variant="solid"
          >
            Task
          </Button>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {!_.isEmpty(items) &&
            items.map((item) => <TaskCard key={item.id} taskId={item.id} />)}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Dashboard;
