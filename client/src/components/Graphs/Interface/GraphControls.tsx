import { HStack } from "@chakra-ui/react";
import GraphControl from "./GraphControl";
import { graphControlsInitialState } from "./GraphControlsInitialState";
import { GraphControlState, IGraphControl } from "./Types/graphControlTypes";

const BarGraphControls = () => {
  const controlSettings: GraphControlState = graphControlsInitialState;

  const controls = controlSettings.controls.map(
    (control: IGraphControl, i: number) => <GraphControl {...control} key={i} />
  );

  return (
    <HStack
      height="15vh"
      width="60vw"
      boxShadow="0 5px 10px 0 rgba(0,0,0,0.08)"
      borderRadius="35px"
      justifyContent="space-evenly"
      px={8}
    >
      {controls}
    </HStack>
  );
};

export default BarGraphControls;
