import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BgOverlay from "../BgOverlay";
import NextLink from "../NextLink";

const Hero = () => {
  return (
    <Box
      background={"url(/images/hero-bg.jpg) no-repeat center center / cover"}
      height="100vh"
      width="100%"
      position={"relative"}
    >
      <BgOverlay alpha={700} />
      <Container
        display="flex"
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height="100%"
        position={"relative"}
        textAlign="center"
      >
        <Heading as="h1" fontSize={"6xl"} width={"700px"} fontWeight={600}>
          Ready To Change Your Life With Astrology?
        </Heading>
        <Text width={"400px"} fontSize={"lg"} mt={4}>
          For self-discovery, relationships, or even self-growth, astrology
          guide you into your life in the best way.
        </Text>
        <Flex alignItems={"center"} mt={10}>
          <Button
            fontSize={"xl"}
            px={12}
            py={7}
            bg={"#708285"}
            transition={"0.3s"}
            borderRadius={"30px"}
            _hover={{ bg: "white", color: "black" }}
          >
            Book a Reading
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
