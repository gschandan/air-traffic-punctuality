import { Flex, VStack } from "@chakra-ui/react";
import BarGraph from "./BarGraph/BarGraph";
import BarGraphControls from "./BarGraph/BarGraphControls";
import Description from "./Description";

const Graph = () => {
  return (
    <Flex flexDir="row">
      <VStack justify="center" ml={5}>
        <BarGraph></BarGraph>
        <BarGraphControls></BarGraphControls>
      </VStack>
      <Description />
    </Flex>
  );
};

export default Graph;
