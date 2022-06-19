import { Divider, Flex, IconButton } from "@chakra-ui/react";
import Logo from "../Assets/Logo";
import LogoTitle from "../Assets/LogoTitle";
import { Menu } from "react-feather";
import { useState } from "react";

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
      >
        <IconButton
          background="none"
          aria-label={""}
          mt={5}
          mb={5}
          _hover={{ background: "none" }}
          icon={<Menu />}
          onClick={() => {
            changeNavBarState(!navBarState);
          }}
        />
        <LogoTitle display={navBarState ? "flex" : "none"} />
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        width="100%"
        mb={3}
        mt={5}
      >
        {" "}
        <Divider display={navBarState ? "flex" : "none"} />
        <Flex flexDir="column">
          <Logo />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
