import { useForm } from "react-hook-form";

const TaskForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("task")} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
