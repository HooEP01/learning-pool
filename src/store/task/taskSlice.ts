import { Task } from "@/model/task.model";
import { createSlice } from "@reduxjs/toolkit";

interface TaskState {
    items: Task[];
}

const initialState: TaskState = {
    items: []
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
});

export default taskSlice.reducer;