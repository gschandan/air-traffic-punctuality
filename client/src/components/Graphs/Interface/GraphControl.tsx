import { Select, Text, VStack } from "@chakra-ui/react";
import { IGraphControl } from "../../../features/graphControlsSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  setXAxis,
  setYAxis,
  setDataset,
  setGraphType,
} from "../../../features/graphControlsSlice";

const GraphControl = ({
  width,
  label,
  selectOptions,
  selectedOption,
}: IGraphControl): JSX.Element => {
  const options = selectOptions.map((opt, i) => (
    <option value={opt.value} key={i}>
      {opt.text}
    </option>
  ));

  const value = useAppSelector((state) => {
    const index = state.graphControls.controls.findIndex(
      (x) => x.label === label
    );
    return state.graphControls.controls[index].selectedOption;
  });
  const dispatch = useAppDispatch();

  return (
    <VStack justifySelf="center">
      <Text>{label}</Text>
      <Select
        size="lg"
        w={width}
        borderRadius="15px"
        onChange={() => dispatch(setDataset(value))}
      >
        {options}
      </Select>
    </VStack>
  );
};

export default GraphControl;
