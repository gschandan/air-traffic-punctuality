import { Grid, Select } from "@chakra-ui/react";
import React from "react";

const BarGraphControls = () => {
  return (
    <Grid
      height="10vh"
      width="100%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      boxShadow="0 5px 10px 0 rgba(0,0,0,0.08)"
      borderRadius="35px"
    >
      <Select
        placeholder="Select option"
        size="lg"
        w="10vw"
        mt={5}
        ml={5}
        borderRadius="15px"
      >
        <option value="option1">Month</option>
        <option value="option2">Airport</option>
      </Select>
      <Select
        placeholder="Select option"
        size="lg"
        w="10vw"
        mt={5}
        ml={5}
        borderRadius="15px"
      >
        <option value="option1">Average Delay</option>
        <option value="option2">Airport</option>
      </Select>
    </Grid>
  );
};

export default BarGraphControls;
