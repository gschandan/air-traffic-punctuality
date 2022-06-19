import { Flex, Icon, useColorModeValue, Text, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { NavItemProps } from "./NavItem";

const NavDescription: FC<NavItemProps> = (props): JSX.Element => {
  const themeColor = useColorModeValue("light", "dark");

  return (
    <>
      <Flex
        position="absolute"
        width={0}
        height={0}
        mt="calc(75px - 7.5px)"
        ml="-10px"
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight={
          "10px solid " + themeColor === "light" ? "blue.50" : "rgba(0,0,0,0.2)"
        }
      />
      <Flex
        flexDirection="column"
        justify="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        height={150}
        borderRadius={5}
        backgroundColor={themeColor === "light" ? "blue.50" : "rgba(0,0,0,0.2)"}
      >
        <Icon
          as={props.icon}
          fontSize="2xl"
          mb={3}
          color={themeColor === "light" ? "blue.400" : "blue.200"}
        />
        <Heading size="lg" fontWeight="400">
          {props.text}
        </Heading>
        <Text
          mt={2}
          display={props.navBarState ? "flex" : "none"}
          fontFamily="Raleway"
          fontWeight="200"
          fontSize="md"
        >
          {props.description}
        </Text>
      </Flex>
    </>
  );
};

export default NavDescription;
