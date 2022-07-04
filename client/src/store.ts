import { configureStore } from "@reduxjs/toolkit";
import datasetSlice from "./features/datasetSlice";
import graphTypeSlice from "./features/graphTypeSlice";
import xAxisSlice from "./features/xAxisSlice";
import yAxisSlice from "./features/yAxisSlice";

export const store = configureStore({
  reducer: {
    dataset: datasetSlice,
    graphType: graphTypeSlice,
    xAxis: xAxisSlice,
    yAxis: yAxisSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
