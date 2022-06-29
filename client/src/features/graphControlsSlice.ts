import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  controlLabels,
  GraphControlState,
  IGraphControlOption,
} from "./graphControlTypes";

export const initialState: GraphControlState = {
  dataset: {
    width: "10vw",
    label: controlLabels.dataset,
    selectOptions: {
      combined: {
        value: "combined",
        text: "Combined",
        category: "dataset",
      },
      scheduled: {
        value: "scheduled",
        text: "Scheduled",
        category: "dataset",
      },
      chartered: {
        value: "chartered",
        text: "Chartered",
        category: "dataset",
      },
    },
    selectedOption: "combined",
  },
  graphType: {
    width: "10vw",
    label: controlLabels.graphType,
    selectOptions: {
      bar: {
        value: "bar",
        text: "Bar",
        category: "graphType",
      },
      line: {
        value: "line",
        text: "Line",
        category: "graphType",
      },
    },
    selectedOption: "bar",
  },
  xAxis: {
    width: "10vw",
    label: controlLabels.xaxis,
    selectOptions: {
      month: {
        value: "month",
        text: "Month",
        category: "xAxis",
      },
      airport: {
        value: "airport",
        text: "Airport",
        category: "xAxis",
      },
    },
    selectedOption: "airport",
  },
  yAxis: {
    width: "10vw",
    label: controlLabels.yaxis,
    selectOptions: {
      averageDelay: {
        value: "averageDelay",
        text: "Average Delay",
        category: "yAxis",
      },
      delayRange: {
        value: "delayRange",
        text: "Delay Range",
        category: "yAxis",
      },
    },
    selectedOption: "averageDelay",
  },
};

const graphControlsSlice = createSlice({
  name: "graphControls",
  initialState,
  reducers: {
    setDataset(state, action: PayloadAction<IGraphControlOption>) {
      const { value, category } = action.payload;
      state[category].selectedOption = value;
    },
    setGraphType(state, action: PayloadAction<IGraphControlOption>) {
      const { value, category } = action.payload;
      state[category].selectedOption = value;
    },
    setXAxis(state, action: PayloadAction<IGraphControlOption>) {
      const { value, category } = action.payload;
      state[category].selectedOption = value;
    },
    setYAxis(state, action: PayloadAction<IGraphControlOption>) {
      const { value, category } = action.payload;
      state[category].selectedOption = value;
    },
  },
});

export const { setDataset, setGraphType, setXAxis, setYAxis } =
  graphControlsSlice.actions;

export default graphControlsSlice.reducer;
