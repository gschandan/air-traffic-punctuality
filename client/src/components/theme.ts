import { StyleConfig } from "@chakra-ui/theme-tools";
import { extendTheme, HTMLChakraProps, ThemingProps } from "@chakra-ui/react";

const components: Record<string, StyleConfig> = {
  Logo: {
    baseStyle: ({ colorMode }) => ({
      filter: colorMode === "dark" ? "hue-rotate(168deg)" : "white",
    }),
    variants: {
      success: ({ colorMode }) => ({
        filter: colorMode === "dark" ? "blue.200" : "blue.500",
      }),
      error: ({ colorMode }) => ({
        filter: colorMode === "dark" ? "blue.200" : "blue.500",
      }),
    },
  },
};

export const customTheme = extendTheme({ components });

export interface LogoProps extends HTMLChakraProps<"img">, ThemingProps {}
