import { AppDispatch } from "@/store";
import { removeTask } from "@/store/task/taskSlice";
import { Box, Button } from "@chakra-ui/react";
import { IconBadgesOff } from "@tabler/icons-react";
import { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import CustomDialog from "../CustomDialog";
import _ from "lodash";

interface TaskFormProps {
  taskId?: string;
  onClose: () => void;
}

const TaskMenu = (props: TaskFormProps) => {
  const { taskId = "", onClose } = props;
  const dispatch: AppDispatch = useDispatch();
  const [modal, setModal] = useState<ReactNode>(null);

  const handleModal = () => {
    setModal(
      <CustomDialog
        key={_.uniqueId("custom_dialog_")}
        func={handleGiveUp}
        dialogKey="deleteTask"
      />
    );
  };

  const handleGiveUp = () => {
    dispatch(removeTask(taskId));
    onClose();
  };

  return (
    <Box w={"150px"}>
      {modal}
      <Button
        type="submit"
        leftIcon={<IconBadgesOff />}
        colorScheme="red"
        variant="outline"
        w={"100%"}
        onClick={handleModal}
      >
        Give Up
      </Button>
    </Box>
  );
};

export default TaskMenu;
