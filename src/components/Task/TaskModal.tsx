"use client";
import { getTaskItem } from "@/selectors/task";
import { AppDispatch } from "@/store";
import {
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

export interface TaskModalProps {
  taskId?: string;
}

const TaskModal = (props: TaskModalProps) => {
  const { taskId = "" } = props;

  const { title = "This is title", description = "This is description" } = useSelector(getTaskItem(taskId)) || {};
  const dispatch: AppDispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: true});

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{description}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
