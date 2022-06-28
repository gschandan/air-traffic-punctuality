export interface IGraphControlOption {
  value: string;
  text: string;
}

export interface IGraphControl {
  width: string;
  label: string;
  selectOptions: IGraphControlOption[];
  selectedOption: IGraphControlOption;
}

export type GraphControlState = {
  controls: IGraphControl[];
};

export type GraphControlAction = {
  type: string;
  control: IGraphControlOption;
};

export type GraphControlDispatch = (
  args: GraphControlAction
) => GraphControlAction;
