import { Select, Text, VStack } from "@chakra-ui/react";
import { setDataset } from "../../../features/datasetSlice";
import { IGraphControlOption } from "../../../features/graphControlTypes";
import { useAppDispatch } from "../../../hooks";

const GraphControl = ({
  width,
  label,
  selectOptions,
  action,
}: any): JSX.Element => {
  const options = selectOptions.map((opt: IGraphControlOption, i: number) => (
    <option value={opt.value} key={i}>
      {opt.text}
    </option>
  ));
  const dispatch = useAppDispatch();

  return (
    <VStack justifySelf="center">
      <Text>{label}</Text>
      <Select
        size="lg"
        w={width}
        borderRadius="15px"
        onChange={(e) => dispatch(setDataset(e.target.value))}
      >
        {options}
      </Select>
    </VStack>
  );
};

export default GraphControl;
