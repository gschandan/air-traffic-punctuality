import { Flex, Icon, useColorModeValue, Text, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { NavItemProps } from "./NavItem";

const NavHover: FC<NavItemProps> = (props): JSX.Element => {
  const themeColor = useColorModeValue("light", "dark");

  return (
    <>
      <Flex />
      <Flex
        flexDirection="column"
        justify="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        height={75}
        borderRadius={5}
        backgroundColor={themeColor === "light" ? "blue.50" : "rgba(0,0,0,0.2"}
      >
        <Icon
          as={props.icon}
          fontSize="xl"
          color={themeColor === "light" ? "blue.400" : "blue.200"}
        />
        <Heading>{props.text}</Heading>
        <Text
          ml={5}
          display={props.navBarState ? "flex" : "none"}
          fontFamily="Raleway"
          fontWeight="200"
          fontSize="xl"
        >
          {props.description}
        </Text>
      </Flex>
    </>
  );
};

export default NavHover;
