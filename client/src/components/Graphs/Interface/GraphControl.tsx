import { Select, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { useContext } from "react";
import { GraphControlsContext } from "../Graph";
import { ActionsType, GraphControlsState } from "./graphControlsSlice";



const GraphControl: FC<IGraphControlProps> = ({
  width,
  label,
  selectOptions,
  action,
}): JSX.Element => {
  const controlContext = useContext(GraphControlsContext);

  const options = selectOptions.map((opt, i) => (
    <option value={opt.value} key={i}>
      {opt.text}
    </option>
  ));

  return (
    <VStack justifySelf="center">
      <Text>{label}</Text>
      <Select
        value={controlContext.state.dataset}
        size="lg"
        w={width}
        borderRadius="15px"
        onChange={(e) =>
          controlContext.dispatch({
            type: action,
            payload: e.target.value,
          })
        }
      >
        {options}
      </Select>
    </VStack>
  );
};

export default GraphControl;
