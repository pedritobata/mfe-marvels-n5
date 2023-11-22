import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import translationReducer from "./features/translationSlice";

export const store = configureStore({
  reducer: {
    translation: translationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
