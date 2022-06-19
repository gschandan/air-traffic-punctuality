import {
  Flex,
  Icon,
  Menu,
  Text,
  Link,
  MenuButton,
  Button,
  useColorModeValue,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";
import "@fontsource/raleway";
import NavHover from "./NavHover";

export interface NavItemProps {
  navBarState: boolean;
  description: string;
  text: string;
  icon: any;
}

const NavItem: FC<NavItemProps> = (props): JSX.Element => {
  const themeColor = useColorModeValue("light", "dark");

  return (
    <Flex
      flexDir="column"
      alignItems={props.navBarState ? "flex-start" : "center"}
      mt={10}
      w="100%"
    >
      <Menu placement="right">
        {({ isOpen }) => (
          <>
            <Link
              borderRadius={5}
              _hover={{ backgroundColor: "rgba(0,0,0,0.5)", textDecor: "none" }}
              backgroundColor={isOpen ? "rgba(0,0,0,0.5)" : "transparent"}
            >
              <MenuButton
                w="100%"
                borderRadius={5}
                as={Button}
                backgroundColor="transparent"
                aria-label={props.text}
                _hover={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  textDecor: "none",
                }}
              >
                <Flex flexDirection="row">
                  <Icon
                    as={props.icon}
                    fontSize="2xl"
                    color={themeColor === "light" ? "blue.400" : "blue.200"}
                  />
                  <Text
                    ml={5}
                    display={props.navBarState ? "flex" : "none"}
                    fontFamily="Raleway"
                    fontWeight="200"
                    fontSize="xl"
                  >
                    {props.text}
                  </Text>
                </Flex>
              </MenuButton>
            </Link>
            <MenuList
              pt={0}
              pb={0}
              ml={3}
              border="none"
              width={125}
              height={75}
            >
              <NavHover
                navBarState={props.navBarState}
                text={props.text}
                icon={props.icon}
                description={props.description}
              />
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};

export default NavItem;
