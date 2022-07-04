import { HStack } from "@chakra-ui/react";
import GraphControl from "./GraphControl";
import { IGraphControl } from "../../../features/graphControlTypes";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { setDataset } from "../../../features/datasetSlice";
import { setGraphType } from "../../../features/graphTypeSlice";
import { setXAxis } from "../../../features/xAxisSlice";
import { setYAxis } from "../../../features/yAxisSlice";

const BarGraphControls = () => {
  const { dataset, graphType, xAxis, yAxis } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <HStack
      height="15vh"
      width="60vw"
      boxShadow="0 5px 10px 0 rgba(0,0,0,0.08)"
      borderRadius="35px"
      justifyContent="space-evenly"
      px={8}
    >
      <GraphControl
        width={dataset.width}
        label={dataset.label}
        selectOptions={dataset.selectOptions}
      />
    </HStack>
  );
};

export default BarGraphControls;
