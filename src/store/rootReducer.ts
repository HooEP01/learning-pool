import taskReducer from './task/taskSlice';
import boardReducer from './board/boardSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    task: taskReducer,
    board: boardReducer
});

export default rootReducer;