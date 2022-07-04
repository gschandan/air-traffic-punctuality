import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  controlLabels,
  IGraphControl,
} from "./graphControlTypes";

export const initialDatasetControlState: IGraphControl = {
  width: "10vw",
  label: controlLabels.dataset,
  selectOptions: [
    {
      value: "combined",
      text: "Combined",
      category: "dataset",
      selected: true,
    },
    {
      value: "scheduled",
      text: "Scheduled",
      category: "dataset",
      selected: false,
    },
    {
      value: "chartered",
      text: "Chartered",
      category: "dataset",
      selected: false,
    },
  ],
};

const datasetSlice = createSlice({
  name: "dataset",
  initialState: initialDatasetControlState,
  reducers: {
    setDataset(state: IGraphControl, action: PayloadAction<string>) {
      const value = action.payload;
      const index = state.selectOptions.findIndex((x) => x.value === value);
      state.selectOptions.forEach((x) => (x.selected = false));
      state.selectOptions[index].selected = true;
    },
  },
});

export const { setDataset } = datasetSlice.actions;

export default datasetSlice.reducer;
