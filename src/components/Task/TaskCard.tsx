"use client";
import { getTaskItem } from "@/selectors/task";
import { AppDispatch } from "@/store";
import { Card, CardBody, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
export interface TaskCardProps {
  variant?: string;
  taskId: string;
  onClick: (taskId?: string) => void;
}

const TaskCard = (props: TaskCardProps) => {
  const { taskId, variant = "elevated", onClick } = props;

  const { id = null, title = "" } = useSelector(getTaskItem(taskId)) || {};
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      {!_.isNull(id) ? (
        <Card
          variant={variant}
          _hover={{
            borderColor: "teal.500",
            borderWidth: "2px",
            cursor: "pointer",
          }}
          onClick={() => onClick(id)}
        >
          <CardBody>
            <Text>{title}</Text>
          </CardBody>
        </Card>
      ) : null}
    </>
  );
};

export default TaskCard;
