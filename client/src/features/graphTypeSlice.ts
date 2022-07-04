import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  controlLabels,
  IGraphControl,
  IGraphControlOption,
} from "./graphControlTypes";

export const initialGraphyTypeControlState: IGraphControl = {
  width: "10vw",
  label: controlLabels.graphType,
  selectOptions: [
    {
      value: "bar",
      text: "Bar",
      category: "graphType",
      selected: true,
    },
    {
      value: "line",
      text: "Line",
      category: "graphType",
      selected: false,
    },
  ],
};

const graphTypeSlice = createSlice({
  name: "graphType",
  initialState: initialGraphyTypeControlState,
  reducers: {
    setGraphType(
      state: IGraphControl,
      action: PayloadAction<IGraphControlOption>
    ) {
      const { value } = action.payload;
      const index = state.selectOptions.findIndex((x) => x.value === value);
      state.selectOptions.forEach((x) => (x.selected = false));
      state.selectOptions[index].selected = true;
    },
  },
});

export const { setGraphType } = graphTypeSlice.actions;

export default graphTypeSlice.reducer;
