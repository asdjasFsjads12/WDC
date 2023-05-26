import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import Heading2 from "./Heading2";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box py={"4rem"} px="2rem" maxW="72rem" mx="auto" id="about">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Box
          w={"max(50%, 25rem)"}
          mx="auto"
          as={motion.div}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: [0, .3, 0.5, 0.7, 1],
          }}
          viewport={{once: true}}

        >
          <Img src="/img/boy_cat.png" />
        </Box>
        <Box
          w={{ base: "100%", lg: "50%" }}
          as={motion.div}
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: [0, .3, 0.5, 0.7, 1],
          }}
          transition={"all 1s ease"}
          viewport={{once: true}}
          
        >
          <Heading2 title="about" />
          <Text lineHeight={"2rem"} letterSpacing={"wide"} fontSize={"1.3rem"}>
            Wonder Cat is about a young man who saw a cat and kept it. We are
            bringing this beautiful story into the crypto world and exploring
            it. We have been in the works to make sure our supporters from day
            one profit from what we are about to create. This project wasn’t
            created to compete with the Dogs and Frogs doing their thing, wonder
            cat has always been my art and I would love to explore the crypto
            world with my supporters.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
