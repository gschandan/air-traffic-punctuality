import { Flex, VStack } from "@chakra-ui/react";
import BarGraph from "./BarGraph/BarGraph";
import BarGraphControls from "./Interface/GraphControls";
import Description from "./Description";
import {graphControlsReducer} from "./Interface/graphControlsSlice";
import { createStore, applyMiddleware, Store } from "redux"
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { GraphControlAction, GraphControlDispatch, GraphControlState } from "./Interface/Types/graphControlTypes";


const graphControlStore: Store<GraphControlState, GraphControlAction> 
& {dispatch: GraphControlDispatch} = createStore(graphControlsReducer)

const Graph = () => {
  return (
    <Provider store={graphControlStore}>
      <Flex flexDir="row">
        <VStack ml={10} width="65vw">
          <BarGraph></BarGraph>
          <BarGraphControls></BarGraphControls>
        </VStack>
        <Description />
      </Flex>
    </Provider>
  );
};

export default Graph;
