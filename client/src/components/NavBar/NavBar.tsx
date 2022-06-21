import { Divider, Flex, IconButton } from "@chakra-ui/react";
import Logo from "../Assets/Logo";
import LogoTitle from "../Assets/LogoTitle";
import { Menu, Home, Edit, Upload, Settings, HelpCircle } from "react-feather";
import { useState } from "react";
import NavItem from "./NavItem";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const NavBar = () => {
  const [navBarState, changeNavBarState] = useState(true);

  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      pos="sticky"
      height="90vh"
      width={navBarState ? "250px" : "75px"}
      mt={1}
      ml={1}
      boxShadow="0 5px 10px 0 rgba(0,0,0,0.25)"
      borderRadius={navBarState ? "35px" : "15px"}
    >
      <Flex
        flexDir="column"
        as="nav"
        alignItems="center"
        mt={5}
        justifyContent="space-evenly"
        height="70vh"
      >
        <IconButton
          background="none"
          aria-label="Options"
          mt={5}
          mb={5}
          _hover={{ background: "none" }}
          icon={<Menu />}
          onClick={() => {
            changeNavBarState(!navBarState);
          }}
          color={"blue.00"}
        />
        <ColorModeSwitcher mt={1} />

        <LogoTitle display={navBarState ? "flex" : "none"} />

        <Divider display={navBarState ? "flex" : "none"} mt={5} />
        <NavItem
          navBarState={navBarState}
          text="Home"
          icon={Home}
          description="Homepage with summary graphs"
        />
        <NavItem
          navBarState={navBarState}
          text="Edit"
          icon={Edit}
          description="Edit the data for the graphs here"
        />
        <NavItem
          navBarState={navBarState}
          text="Upload"
          icon={Upload}
          description="Upload new data"
        />
        <NavItem
          navBarState={navBarState}
          text="Settings"
          icon={Settings}
          description="Edit your dashboard confiuguration"
        />
        <NavItem
          navBarState={navBarState}
          text="Help"
          icon={HelpCircle}
          description="View our documentation"
        />
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        width="100%"
        mb={3}
        mt={5}
      >
        <Divider display={navBarState ? "flex" : "none"} />
        <Flex flexDir="column">
          <Logo />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
