export interface IGraphControlOption {
  value: string;
  text: string;
  category: string;
  selected: boolean;
}

export interface IGraphControl {
  width: string;
  label: string;
  selectOptions: IGraphControlOption[];
}

export const controlLabels = {
  dataset: "Select Dataset:",
  graphType: "Select Graph Type:",
  xaxis: "Select X Axis:",
  yaxis: "Select Y Axis:",
} as const;
