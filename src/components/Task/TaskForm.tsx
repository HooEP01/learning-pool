import { getTaskItem } from "@/selectors/task";
import { AppDispatch } from "@/store";
import { addTask } from "@/store/task/taskSlice";
import {
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";
import { IconTargetArrow } from "@tabler/icons-react";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface TaskFormProps {
  taskId?: string;
  onClose: () => void;
}

const TaskForm = (props: TaskFormProps) => {
  const { taskId = "", onClose } = props;

  const {
    id = null,
    title = "",
    description = "",
  } = useSelector(getTaskItem(taskId)) || {};
  const dispatch: AppDispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: title,
      description: description,
    },
  });

  const onSubmit = (data: any) => {
    data = { ...data, id: _.uniqueId() };
    dispatch(addTask(data));
    onClose();
  };

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              {...register("title", {
                required: true,
              })}
              type="text"
              placeholder="Start now!"
            />
            <FormHelperText></FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              {...register("description", {
                required: true,
              })}
              autoComplete="off"
              placeholder="Describe your goal!"
            />
            <FormHelperText></FormHelperText>
          </FormControl>

          <Button
            type="submit"
            leftIcon={<IconTargetArrow />}
            colorScheme="teal"
            variant="solid"
          >
            Add Task
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default TaskForm;
