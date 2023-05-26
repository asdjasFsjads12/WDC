import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Video from "./Video";
import { motion } from "framer-motion";

export default function Jumbotron() {
  return (
    <Box py={"4rem"} px="2rem" maxW="72rem" mx="auto">
      <Flex py="4rem">
        <Box>
          <Heading
            as={motion.h1}
            initial={{ top: "-3rem", opacity: 0 }}
            whileInView={{
              top: ["-2rem", "-1rem", "0"],
              opacity: [0, , 0.5, 0.7, 1],
            }}
            transition={"all 1.5s ease"}
            viewport={{ once: true }}
            letterSpacing={"tighter"}
            mb={"8"}
            pos="relative"
            fontSize={"clamp(3rem, 18vw,5rem)"}
            fontFamily={"'Genty Demo', sans-serif"}
            fontStyle={"italic"}
            textShadow={"2px 1px #fff"}
          >
            Wonder Cat
          </Heading>
          <Text
            lineHeight={"2rem"}
            as={motion.p}
            letterSpacing={"wide"}
            fontSize={"1.2rem"}
            viewport={{ once: true }}
            initial={{ scale: 0.7, opacity: 0.3 }}
            whileInView={{ scale: 1, opacity: [0, 0.3, 0.5, 0.7, 1] }}
            transition={"all 1s ease"}
          >
            There's more to this kitty than meets the eye! Kyuu-chan loves
            snacks, cuddles, and bow ties, but most of all love Hinata, the
            young professional who adopted this mischievous wonder cat into his
            home. As the two adjust to life together, they discover they have
            much to learn from each other. The ordinary and the extraordinary
            live side by side in this delightful slice-of-life manga!
          </Text>
        </Box>
        {/* #ed56a0 */}
        {/* <video */}
      </Flex>
      <Video />
    </Box>
  );
}
