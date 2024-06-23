import { RootState } from "@/store";

// Task
export const getTaskItems = () => (state: RootState) => state.task.items;
export const getTaskItem = (taskId: string) => (state: RootState) => state.task.items.find((item) => item.id === taskId);

// Pool Tasks
export const getPoolTaskItems = () => (state: RootState) => state.task.poolItems;
export const getPoolTaskItem = (taskId: string) => (state: RootState) => state.task.poolItems.find((item) => item.id === taskId);