export interface IGraphControlOption {
  value: string;
  text: string;
  category: string;
}

export interface IGraphControl {
  width: string;
  label: string;
  selectOptions: { [option: string]: IGraphControlOption };
  selectedOption: string;
}

export interface GraphControlState {
  [control: string]: IGraphControl;
}

export const controlLabels = {
  dataset: "Select Dataset:",
  graphType: "Select Graph Type:",
  xaxis: "Select X Axis:",
  yaxis: "Select Y Axis:",
} as const;

export const options = {
  dataset: "dataset",
  graphType: "graphType",
  xaxis: "xAxis",
  yaxis: "yAxis",
} as const;
