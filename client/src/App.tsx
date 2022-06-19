import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  HStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Graph from "./components/Graphs/BarGraph";
import NavBar from "./components/NavBar/NavBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh" w="100vw">
      <HStack w="100vw">
        <NavBar></NavBar>
        <Graph></Graph>
      </HStack>
    </Grid>
  </ChakraProvider>
);
