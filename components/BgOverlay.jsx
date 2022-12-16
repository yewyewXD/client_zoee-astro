import { Box } from "@chakra-ui/react";
import React from "react";

const BgOverlay = ({ alpha }) => {
  return (
    <Box
      height={"100%"}
      width={"100%"}
      position="absolute"
      bg={`blackAlpha.${alpha}`}
    ></Box>
  );
};

export default BgOverlay;
