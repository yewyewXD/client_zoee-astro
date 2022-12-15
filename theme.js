import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
};

const styles = {
  global: {
    body: {
      bg: "black",
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
