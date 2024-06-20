import { Dialog, dialogs } from "@/constant";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";

interface CustomDialogProps {
  func: <T>(...arg: any[]) => T;
  args?: any[];
  dialogKey: string;
}

const CustomDialog = (props: CustomDialogProps) => {
  const { func, dialogKey = "general", args = [] } = props;
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const { title, description } = dialogs[
    dialogKey as keyof typeof dialogs
  ] as Dialog;

  const processFunc = () => {
    func(...args);
    onClose();
  };

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>
          <ModalFooter>
            <CustomButton text="Close" colorScheme="blue" onClick={onClose} mr={3} />
            <CustomButton text="Yes" colorScheme="ghost"  onClick={processFunc} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomDialog;
