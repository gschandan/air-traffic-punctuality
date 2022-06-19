import { FC } from "react";
import logoDark from "../../assets/logo_dark_2.png";
import logoLight from "../../assets/logo_light_2.png";
import { useColorModeValue, Img } from "@chakra-ui/react";

interface LogoProps {
  height?: string;
  width?: string;
}

const Logo: FC<LogoProps> = (props): JSX.Element => {
  const themeColor = useColorModeValue(logoLight, logoDark);
  return (
    <Img
      src={themeColor}
      alt="Logo"
      height={props.height}
      width={props.width}
      m={4}
    />
  );
};

export default Logo;
