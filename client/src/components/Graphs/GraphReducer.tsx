export const Actions = {
  setXAxis: "setXAxis",
  setYAxis: "setYAxis",
  setGraphType: "setGraphType",
  setDataset: "setDataset",
};

export const GraphControlValues = {
  xAxis: "month",
  yAxis: "average-delay",
  graphType: "bar",
  dataset: "combined",
};

const GraphReducer = (state: typeof GraphControlValues, action: { type: any; payload: any }) => {
  switch (action.type) {
    case Actions.setXAxis:
      return {
        ...state,
        xAxis: action.payload,
      };
    case Actions.setYAxis:
      return {
        ...state,
        yAxis: action.payload,
      };
    case Actions.setGraphType:
      return {
        ...state,
        graphType: action.payload,
      };
    case Actions.setDataset:
      return {
        ...state,
        dataset: action.payload,
      };
    default:
      return state;
  }
};

export default GraphReducer;
