import { configureStore } from "@reduxjs/toolkit";
import graphControlsSlice from "./features/graphControlsSlice";

export const store = configureStore({
  reducer: {
    graphControls: graphControlsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
