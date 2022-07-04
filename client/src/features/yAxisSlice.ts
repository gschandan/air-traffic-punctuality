import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  controlLabels,
  IGraphControl,
  IGraphControlOption,
} from "./graphControlTypes";

export const initialYAxisControlState: IGraphControl = {
  width: "10vw",
  label: controlLabels.yaxis,
  selectOptions: [
    {
      value: "averageDelay",
      text: "Average Delay",
      category: "yAxis",
      selected: true,
    },
    {
      value: "delayRange",
      text: "Delay Range",
      category: "yAxis",
      selected: false,
    },
  ],
};

const yAxisSlice = createSlice({
  name: "yAxis",
  initialState: initialYAxisControlState,
  reducers: {
    setYAxis(state: IGraphControl, action: PayloadAction<IGraphControlOption>) {
      const { value } = action.payload;
      const index = state.selectOptions.findIndex((x) => x.value === value);
      state.selectOptions.forEach((x) => (x.selected = false));
      state.selectOptions[index].selected = true;
    },
  },
});

export const { setYAxis } = yAxisSlice.actions;

export default yAxisSlice.reducer;
