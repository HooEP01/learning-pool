import { RootState } from "@/store";

export const getTaskItems = () => (state: RootState) => state.task.items;
export const getTaskItem = (taskId: string) => (state: RootState) => state.task.items.find((item) => item.id === taskId);