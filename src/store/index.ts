import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { preloadedState, saveToLocalStorage } from "@/utils/persist";

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;