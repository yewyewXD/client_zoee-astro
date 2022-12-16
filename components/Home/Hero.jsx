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
        alignItems={"center"}
        height="100%"
        position={"relative"}
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem colSpan={2}>
            <Text width={"280px"} mb={4}>
              For self-discovery, relationships, or even self-growth, astrology
              guide you into your life in the best way.
            </Text>
            <Heading as="h1" fontSize={"6xl"} width={"700px"} fontWeight={600}>
              Ready To Change Your Life With Astrology?
            </Heading>
            <Flex alignItems={"center"} mt={10}>
              <Button
                fontSize={"xl"}
                px={10}
                py={6}
                bg={"#708285"}
                transition={"0.3s"}
                borderRadius={"30px"}
                _hover={{ bg: "white", color: "black" }}
              >
                Yes, I am!
              </Button>

              <Text
                ml={10}
                cursor="pointer"
                transition={"0.3s"}
                textDecor={"underline"}
                _hover={{ opacity: "0.7" }}
              >
                Learn more
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
