import { Flex, VStack } from "@chakra-ui/react";
import BarGraph from "./BarGraph/BarGraph";
import BarGraphControls from "./GraphControls";
import Description from "./Description";

const Graph = () => {
  return (
    <Flex flexDir="row">
      <VStack ml={10} width="65vw">
        <BarGraph></BarGraph>
        <BarGraphControls></BarGraphControls>
      </VStack>
      <Description />
    </Flex>
  );
};

export default Graph;
