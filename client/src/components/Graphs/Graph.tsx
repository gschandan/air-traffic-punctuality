import { Flex, VStack } from "@chakra-ui/react";
import BarGraph from "./BarGraph/BarGraph";
import BarGraphControls from "./GraphControls";
import Description from "./Description";
import { createContext } from "react";
import { useReducer } from "react";
import GraphReducer, { GraphControlsInitialValues } from "./GraphReducer";

export const GraphControlsContext = createContext(
  {} as ReturnType<typeof useGraphReducer>
);

const useGraphReducer = () => {
  const [state, dispatch] = useReducer(
    GraphReducer,
    GraphControlsInitialValues
  );
  return { state, dispatch };
};

const Graph = () => {
  return (
    <GraphControlsContext.Provider value={useGraphReducer()}>
      <Flex flexDir="row">
        <VStack ml={10} width="65vw">
          <BarGraph></BarGraph>
          <BarGraphControls></BarGraphControls>
        </VStack>
        <Description />
      </Flex>
    </GraphControlsContext.Provider>
  );
};

export default Graph;
