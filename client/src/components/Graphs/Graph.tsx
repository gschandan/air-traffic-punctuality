import { VStack } from "@chakra-ui/react";
import BarGraph from "./BarGraph";
import BarGraphControls from "./BarGraphControls";

const Graph = () => {
  return (
    <VStack justify="center" ml={5}>
      <BarGraph></BarGraph>
      <BarGraphControls></BarGraphControls>
    </VStack>
  );
};

export default Graph;
