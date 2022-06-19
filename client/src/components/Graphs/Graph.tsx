import { VStack } from "@chakra-ui/react";
import BarGraph from "./BarGraph";
import BarGraphControls from "./BarGraphControls";

const Graph = () => {
  return (
    <VStack>
      <BarGraph></BarGraph>
      <BarGraphControls></BarGraphControls>
    </VStack>
  );
};

export default Graph;
