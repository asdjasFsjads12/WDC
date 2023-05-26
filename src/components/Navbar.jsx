import { Box, Button, Flex, Grid, Img, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Box shadow={"md"}>
      <Flex
        as="nav"
        alignItems={"center"}
        px="2rem"
        py="1.5rem"
        maxW="72rem"
        mx="auto"
        justifyContent={"space-between"}
        w="full"
      >
        <Box>
          <Img src="cat_img.png" w="clamp(5rem, 12vw, 15rem)"></Img>
        </Box>
        <Button
          bg="transparent"
          gap=".2rem"
          flexDir={"column"}
          onClick={() => setOpenNav(true)}
          display={{ base: "flex", md: "none" }}
        >
          <Text as="span" w="1rem" h=".2rem" bg="#000"></Text>
          <Text as="span" w="1rem" h=".2rem" bg="#000"></Text>
        </Button>
        <Flex
          gap={"4"}
          flexDir={{ base: "column", md: "row" }}
          pos={{ base: "fixed", md: "relative" }}
          right={{ base: openNav ? "0" : "min(-90vw, -40rem)", md: "0" }}
          top={"0"}
          w={{ base: "min(90vw, 40rem)", md: "unset" }}
          bg={{ base: "#000", md: "transparent" }}
          p={{ base: "3rem", md: "unset" }}
          h={{ base: "100vh", md: "unset" }}
          color={{ base: "#fff", md: "inherit" }}
          transition={"all .3s ease"}
          zIndex={"2"}
        >
          <Text
            pos="absolute"
            top={"1rem"}
            right="1rem"
            textShadow={"unset"}
            onClick={() => setOpenNav(false)}
            display={{ base: "flex", md: "none" }}
          >
            X
          </Text>
          <Link
            href="#about"
            textShadow={"unset"}
            _hover={{ color: "#f161a5" }}
          >
            about
          </Link>
          <Link
            href="#steps"
            textShadow={"unset"}
            _hover={{ color: "#f161a5" }}
          >
            how to buy
          </Link>
          <Link
            href="#tokenomics"
            textShadow={"unset"}
            _hover={{ color: "#f161a5" }}
          >
            tokenomics
          </Link>
          <Link href="#road" textShadow={"unset"} _hover={{ color: "#f161a5" }}>
            road map
          </Link>
          <Link
            href="#contact"
            textShadow={"unset"}
            _hover={{ color: "#f161a5" }}
          >
            contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
