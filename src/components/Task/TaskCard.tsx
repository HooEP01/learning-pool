"use client";
import { getTaskItem } from "@/selectors/task";
import { AppDispatch } from "@/store";
import { Card, CardBody, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

export interface TaskCardProps {
  variant?: string;
  taskId: string;
}

const TaskCard = (props: TaskCardProps) => {
  const { variant = "elevated", taskId } = props;

  const { title = "" } = useSelector(getTaskItem(taskId)) || {};
  const dispatch: AppDispatch = useDispatch();

  return (
    <Card
      variant={variant}
      _hover={{
        borderColor: "teal.500",
        borderWidth: "2px",
        cursor: "pointer",
      }}
      onClick={() => console.log("Card clicked")}
    >
      <CardBody>
        <Text>
          {title}
        </Text>
      </CardBody>
    </Card>
  );
};

export default TaskCard;
