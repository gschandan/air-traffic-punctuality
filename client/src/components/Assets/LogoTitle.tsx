import { Text } from "@chakra-ui/react";
import "@fontsource/raleway";
import { FC } from "react";

interface LogoTitleProps {
  display: string;
}

const LogoTitle: FC<LogoTitleProps> = (props): JSX.Element => {
  return (
    <Text
      fontFamily="Raleway"
      fontSize="3xl"
      textTransform="uppercase"
      textAlign="center"
      display={props.display}
    >
      Flight <br />
      Insights
    </Text>
  );
};

export default LogoTitle;
