import { Select, Text, VStack } from "@chakra-ui/react";
import { IGraphControl } from "./Types/graphControlTypes";

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

  return (
    <VStack justifySelf="center">
      <Text>{label}</Text>
      <Select
        value={selectedOption.value}
        size="lg"
        w={width}
        borderRadius="15px"
        // onChange={(e) =>
        //   controlContext.dispatch({
        //     type: action,
        //     payload: e.target.value,
        //   })
        // }
      >
        {options}
      </Select>
    </VStack>
  );
};

export default GraphControl;
