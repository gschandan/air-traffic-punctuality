import {
  controlLabels,
  graphControlsInitialState,
} from "./Interface/GraphControlsInitialState";
import {
  SET_DATASET,
  SET_GRAPH_TYPE,
  SET_XAXIS,
  SET_YAXIS,
} from "./Interface/Types/graphControlActionTypes.d copy";
import {
  GraphControlAction,
  GraphControlState,
  IGraphControl,
} from "./Interface/Types/graphControlTypes";

const GraphReducer = (
  state: GraphControlState = graphControlsInitialState,
  action: GraphControlAction
): GraphControlState => {
  const { type, control } = action;

  switch (type) {
    case SET_XAXIS: {
      const controlIndex: number = state.controls.findIndex(
        (x) => x.label === controlLabels.xaxis
      );
      const newControlState = [...state.controls];
      newControlState[controlIndex].selectedOption = control;
      return {
        ...state,
        controls: newControlState,
      };
    }
    case SET_YAXIS: {
      const controlIndex: number = state.controls.findIndex(
        (x) => x.label === controlLabels.yaxis
      );
      const newControlState = [...state.controls];
      newControlState[controlIndex].selectedOption = control;
      return {
        ...state,
        controls: newControlState,
      };
    }
    case SET_GRAPH_TYPE: {
      const controlIndex: number = state.controls.findIndex(
        (x) => x.label === controlLabels.graphType
      );
      const newControlState = [...state.controls];
      newControlState[controlIndex].selectedOption = control;
      return {
        ...state,
        controls: newControlState,
      };
    }
    case SET_DATASET: {
      const controlIndex: number = state.controls.findIndex(
        (x) => x.label === controlLabels.dataset
      );
      const newControlState = [...state.controls];
      newControlState[controlIndex].selectedOption = control;
      return {
        ...state,
        controls: newControlState,
      };
    }
    default: {
      return state;
    }
  }
};

export default GraphReducer;
