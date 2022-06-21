import { Flex, Heading, Text, Divider, HStack } from "@chakra-ui/react";

const Description = () => {
  return (
    <HStack height="55vh">
      <Divider orientation="vertical" />
      <Flex width="100%" height="45vh" flexDir="column" pr={10} pl={3}>
        <Heading mb={10} fontWeight="light" size="3xl">
          Description
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          posuere nibh ac leo vestibulum, ut convallis ex feugiat. Duis
          pellentesque sed eros eget tincidunt. Aliquam convallis mauris at
          turpis lobortis aliquam. Sed molestie ante ac orci feugiat, ut
          facilisis neque facilisis. In et imperdiet tortor. Nam eget faucibus
          justo. Nulla vel tempus nibh, nec tincidunt nunc. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nam lobortis hendrerit finibus.
          Phasellus rutrum augue nisl, sed facilisis augue molestie sed. Aliquam
          luctus lacinia purus ac tristique. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus posuere nibh ac leo vestibulum,
          ut convallis ex feugiat. Duis pellentesque sed eros eget tincidunt.
          Aliquam convallis mauris at turpis lobortis aliquam. Sed molestie ante
          ac orci feugiat, ut facilisis neque facilisis.
        </Text>
        <Text mt="auto">Source:</Text>
        <Text>CAA</Text>
      </Flex>
    </HStack>
  );
};

export default Description;
