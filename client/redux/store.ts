import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TodoApi } from "./api/todo.api";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [TodoApi.reducerPath]: TodoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TodoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
