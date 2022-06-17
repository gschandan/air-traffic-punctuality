import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Graph from "./components/Graph/Graph"
import Header from "./components/Header/Header"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Header></Header>
        <VStack spacing={8}>
          <Graph></Graph>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
