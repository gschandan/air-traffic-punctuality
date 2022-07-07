import { Flex } from "@chakra-ui/react";
import BarGraph from "./BarGraph/BarGraph";
import BarGraphControls from "./Interface/GraphControls";
import Description from "./Description";
import { createContext } from "react";
import { useReducer } from "react";
import GraphReducer, { GraphControlValues } from "./GraphReducer";

export const GraphControlsContext = createContext(
  {} as ReturnType<typeof useGraphReducer>
);

const useGraphReducer = () => {
  const [state, dispatch] = useReducer(GraphReducer, GraphControlValues);
  return { state, dispatch };
};

const Graph = () => {
  return (
    <GraphControlsContext.Provider value={useGraphReducer()}>
      <Flex flexDir="row" width="90vw">
        <Flex
          flexDir="column"
          width="65vw"
          height="80vh"
          justify="space-between"
        >
          <BarGraph></BarGraph>
          <BarGraphControls></BarGraphControls>
        </Flex>
        <Description />
      </Flex>
    </GraphControlsContext.Provider>
  );
};

export default Graph;
