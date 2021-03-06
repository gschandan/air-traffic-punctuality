import { ChakraProvider, Grid, theme, HStack } from "@chakra-ui/react";
import Graph from "./components/Graphs/Graph";
import NavBar from "./components/NavBar/NavBar";
import "@fontsource/raleway";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh" w="100vw" fontFamily="Raleway">
      <HStack w="100vw">
        <NavBar></NavBar>
        <Graph></Graph>
      </HStack>
    </Grid>
  </ChakraProvider>
);
