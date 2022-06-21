import {
  Grid,
  GridItem,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GraphControlsContext } from "./Graph";
import { Actions } from "./GraphReducer";

const BarGraphControls = () => {
  const controlContext = useContext(GraphControlsContext);

  return (
    <Grid
      height="15vh"
      width="60vw"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
      boxShadow="0 5px 10px 0 rgba(0,0,0,0.08)"
      borderRadius="35px"
    >
      <GridItem
        colStart={1}
        rowStart={1}
        alignSelf="flex-end"
        justifySelf="center"
      >
        <Text>Select Dataset:</Text>
      </GridItem>
      <GridItem colStart={1} rowStart={2} justifySelf="center">
        <Select
          value={controlContext.state.dataset}
          size="lg"
          w="10vw"
          ml={5}
          borderRadius="15px"
          onChange={(e) =>
            controlContext.dispatch({
              type: Actions.setDataset,
              payload: e.target.value,
            })
          }
        >
          <option value="combined">Combined</option>
          <option value="scheduled">Scheduled</option>
          <option value="chartered">Chartered</option>
        </Select>
      </GridItem>
      <GridItem
        colStart={2}
        rowStart={1}
        alignSelf="flex-end"
        justifySelf="center"
      >
        <Text>Select Chart Type:</Text>
      </GridItem>
      <GridItem colStart={2} rowStart={2} justifySelf="center">
        <Select
          value={controlContext.state.graphType}
          size="lg"
          w="10vw"
          ml={5}
          borderRadius="15px"
          onChange={(e) =>
            controlContext.dispatch({
              type: Actions.setGraphType,
              payload: e.target.value,
            })
          }
        >
          <option value="bar">Bar</option>
          <option value="line">Line</option>
        </Select>
      </GridItem>
      <GridItem
        colStart={3}
        rowStart={1}
        alignSelf="flex-end"
        justifySelf="center"
      >
        <Text>Select X Axis:</Text>
      </GridItem>
      <GridItem colStart={3} rowStart={2} justifySelf="center">
        <Select
          value={controlContext.state.xAxis}
          size="lg"
          w="10vw"
          ml={5}
          borderRadius="15px"
          onChange={(e) =>
            controlContext.dispatch({
              type: Actions.setXAxis,
              payload: e.target.value,
            })
          }
        >
          <option value="month"> Month</option>
          <option value="airport">Airport</option>
        </Select>
      </GridItem>
      <GridItem
        colStart={4}
        rowStart={1}
        alignSelf="flex-end"
        justifySelf="center"
      >
        <Text>Select Y Axis:</Text>
      </GridItem>
      <GridItem colStart={4} rowStart={2} justifySelf="center">
        <Select
          value={controlContext.state.yAxis}
          size="lg"
          w="10vw"
          ml={5}
          borderRadius="15px"
          onChange={(e) =>
            controlContext.dispatch({
              type: Actions.setYAxis,
              payload: e.target.value,
            })
          }
        >
          <option value="average-delay">Average Delay</option>
          <option value="arrival-time-between">Time between</option>
        </Select>
      </GridItem>
      <GridItem
        colStart={5}
        colSpan={2}
        rowStart={1}
        alignSelf="flex-end"
        justifySelf="center"
      >
        <Text>Select Delay:</Text>
      </GridItem>
      <GridItem
        colStart={5}
        colSpan={2}
        rowStart={2}
        alignSelf="center"
        ml={5}
        pr={3}
      >
        <RangeSlider
          aria-label={["min", "max"]}
          colorScheme="blue"
          defaultValue={[60, 120]}
          min={0}
          max={360}
          step={60}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack bg="rgb(39 157 210)" />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </GridItem>
    </Grid>
  );
};

export default BarGraphControls;
