import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
};

const components = {
  Container: defineStyleConfig({ baseStyle: { maxW: "80%" } }),
};

const styles = {
  global: {
    body: {
      bg: "black",
    },
  },
};

const theme = extendTheme({ config, styles, components });

export default theme;
