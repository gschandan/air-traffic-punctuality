import { graphControlsInitialState } from "./GraphControlsInitialState";

import { createSlice } from "@reduxjs/toolkit";

const initialState = graphControlsInitialState;

const graphControlsSlice = createSlice({
  name: "graphControls",
  initialState,
  reducers: {
    setDataset(state, action) {
      const { selected, index } = action.payload;
      state.controls[index].selectedOption = selected;
    },
    setGraphType(state, action) {
      const { selected, index } = action.payload;
      state.controls[index].selectedOption = selected;
    },
    setXAxis(state, action) {
      const { selected, index } = action.payload;
      state.controls[index].selectedOption = selected;
    },
    setYAxis(state, action) {
      const { selected, index } = action.payload;
      state.controls[index].selectedOption = selected;
    },
  },
});

export const { setDataset, setGraphType, setXAxis, setYAxis } =
  graphControlsSlice.actions;

export default graphControlsSlice.reducer;
