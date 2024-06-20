import { Task } from "@/model/task.model";
import apiClient from "@/utils/http";
import { AxiosError, AxiosResponse } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface TaskState {
    items: Task[];
}

const initialState: TaskState = {
    items: []
};

export const fetchTasksAsync = createAsyncThunk(
    "task/fetchTasksAsync",
    async (boardPk: string, thunkApi) => {
        try {
            const response = await apiClient.get(`/task/${boardPk}`);
            return thunkApi.fulfillWithValue(response.data);

        } catch (error) {
            const err = error as AxiosError;
            return thunkApi.rejectWithValue(err.response?.data);
        }
    }
);

export const addTaskAsync = createAsyncThunk(
    "task/addTaskAsync",
    async (task: Task, thunkApi) => {
        try {
            const response = await apiClient.post("/task", task);
            return thunkApi.fulfillWithValue(response.data);

        } catch (error) {
            const err = error as AxiosError;
            return thunkApi.rejectWithValue(err.response?.data);
        }
    }
);

export const removeTaskAsync = createAsyncThunk(
    "task/removeTaskAsync",
    async (pk: string, thunkApi) => {
        try {
            const response = await apiClient.delete(`/task/${pk}`);
            return thunkApi.fulfillWithValue(response.data);

        } catch (error) {
            const err = error as AxiosError;
            return thunkApi.rejectWithValue(err.response?.data);
        }
    }
);

export const updateTaskAsync = createAsyncThunk(
    "task/updateTaskAsync",
    async (task: Task, thunkApi) => {
        try {
            const response = await apiClient.put(`/task/${task.pk}`, task);
            return thunkApi.fulfillWithValue(response.data);

        } catch (error) {
            const err = error as AxiosError;
            return thunkApi.rejectWithValue(err.response?.data);
        }
    }
);

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask(state, action) {
            state.items.push(action.payload);
        },
        removeTask(state, action) {
            state.items = state.items.filter((task) => task.pk !== action.payload);
        },
        updateTask(state, action) {
            const task = state.items.find((task) => task.pk === action.payload.pk);
            if (task) {
                task.title = action.payload.title;
                task.description = action.payload.description;
            }
        }
    },
    extraReducers: (builder) => builder
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;