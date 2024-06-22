import { Dialog, Dialogs } from "@/constant";
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
  func: (...args: any[]) => void;
  args?: any[];
  dialogKey?: string;
}

const CustomDialog = (props: CustomDialogProps) => {
  const { func, dialogKey = "general", args = [] } = props;
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const { title, description } = Dialogs[
    dialogKey as keyof typeof Dialogs
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
            <CustomButton text="Close" colorScheme="blue" variant="outline" onClick={onClose} mr={3} />
            <CustomButton text="Yes" colorScheme="teal"  onClick={processFunc} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomDialog;
