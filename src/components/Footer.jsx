import { Box, HStack, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import Heading2 from "./Heading2";

export default function Footer() {
  return (
    <Box as="footer" id="contact">
      <Box pt={"4rem"} px="2rem" maxW="72rem" mx="auto">
      <Heading2 title={"contact"} isCentered={true}/>
      <Heading as="h4" textAlign={"center"} letterSpacing={"tighter"} mb={"8"} fontSize={"2rem"} fontFamily={"'Genty Demo', sans-serif"} fontStyle={"italic"} textShadow={"0 1px #fff"}>Wonder Cat</Heading>

      <HStack gap={"8"} justifyContent={"center"} color={"#f161a5"} my="4rem">
        <Link
        fontSize={"5rem"}
        _hover={{transform: "scale(1.05"}}
          href="https://t.me/WonderCatbsc"
          className="fa fa-telegram"
          bg={"#fff"}
          borderRadius={"50%"}
        ></Link>
        <Link
        fontSize={"5rem"}
        _hover={{transform: "scale(1.1"}}
        transition={"all .3s ease"}
          href="https://twitter.com/wondercatbsc"
          className="fa fa-twitter"
        ></Link>
      </HStack>
      </Box>
      <HStack shadow={"0 0 3px #f161a57d"} py={"4"} px="1" justifyContent={"center"}>
        <Text>&copy;2023 by wonder cat. All rights preserved </Text>
      </HStack>
    </Box>
  );
}
