import { AppDispatch } from "@/store";
import { removeTask } from "@/store/task/taskSlice";
import { Box, Button } from "@chakra-ui/react";
import { IconBadgesOff } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import CustomDialog from "../CustomDialog";
import _ from "lodash";
import { useNode } from "@/hooks/use-node";

interface TaskFormProps {
  taskId?: string;
  onClose: () => void;
}

const TaskMenu = (props: TaskFormProps) => {
  const { taskId = "", onClose } = props;
  const dispatch: AppDispatch = useDispatch();
  const { node, handleNode } = useNode();

  const handleModal = () => {
    handleNode(
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
      {node}
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
