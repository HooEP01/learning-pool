"use client";
import { getTaskItem } from "@/selectors/task";
import { AppDispatch } from "@/store";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./TaskForm";
import TaskMenu from "./TaskMenu";
import _ from "lodash";

export interface TaskModalProps {
  taskId?: string;
}

const TaskModal = (props: TaskModalProps) => {
  const { taskId = "" } = props;

  const {
    id = null,
    title = "New Task",
    description = "This is description",
  } = useSelector(getTaskItem(taskId)) || {};

  const dispatch: AppDispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Modal isOpen={isOpen} size={"lg"} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {/* <Text>{description}</Text> */}
          <Flex direction="row" gap={6}>
            <TaskForm taskId={taskId} onClose={onClose} />
            {!_.isNull(id) && <TaskMenu taskId={id} onClose={onClose} />}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
