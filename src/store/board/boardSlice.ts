import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
});

export default boardSlice.reducer;