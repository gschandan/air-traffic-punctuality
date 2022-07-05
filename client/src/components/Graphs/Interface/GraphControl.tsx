import {
  GridItem,
  Select,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GraphControlsContext } from "../Graph";

interface GraphControlSelectValues {
  value: string;
  text: string;
}

export interface BarGraphControlProps{
  colStart: number;
  colSpan: number;
  rowStart: number;
  width: string;
  label: string;
  selectOptions: GraphControlSelectValues[];
  action: {
    [key: string] : string;
  }
}

const BarGraphControl = ({colStart, colSpan, rowStart, width, label, selectOptions, action}:BarGraphControlProps): JSX.Element => {
  const controlContext = useContext(GraphControlsContext);
  
  const options = selectOptions.map((opt, i) => <option value={opt.value} key={i}>{opt.text}</option>)

  return (
    <>
    <GridItem
        colStart={colStart}
        rowStart={rowStart}
        colSpan={colSpan}
        alignSelf="flex-end"
        justifySelf="center"
      >
        <Text>{label}</Text>
      </GridItem>
      <GridItem colStart={colStart} rowStart={rowStart+1} justifySelf="center">
        <Select
          value={controlContext.state.dataset}
          size="lg"
          w={width}
          ml={5}
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
      </GridItem>
      </>
  );
};

export default BarGraphControl;
