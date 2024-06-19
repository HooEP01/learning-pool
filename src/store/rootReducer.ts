import taskReducer from './task/taskSlice';
import boardReducer from './board/boardSlice';

const rootReducer = {
    task: taskReducer,
    board: boardReducer
};

export default rootReducer;