import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  controlLabels,
  IGraphControl,
  IGraphControlOption,
} from "./graphControlTypes";

export const initialXAxisControlState: IGraphControl = {
  width: "10vw",
  label: controlLabels.xaxis,
  selectOptions: [
    {
      value: "month",
      text: "Month",
      category: "xAxis",
      selected: true,
    },
    {
      value: "airport",
      text: "Airport",
      category: "xAxis",
      selected: false,
    },
  ],
};

const xAxisSlice = createSlice({
  name: "xAxis",
  initialState: initialXAxisControlState,
  reducers: {
    setXAxis(state: IGraphControl, action: PayloadAction<IGraphControlOption>) {
      const { value } = action.payload;
      const index = state.selectOptions.findIndex((x) => x.value === value);
      state.selectOptions.forEach((x) => (x.selected = false));
      state.selectOptions[index].selected = true;
    },
  },
});

export const { setXAxis } = xAxisSlice.actions;

export default xAxisSlice.reducer;
