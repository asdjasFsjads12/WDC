import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Heading2 from "./Heading2";
import { motion } from "framer-motion";

function Card({ title, content }) {
  return (
    <Box p={4} width={{ base: "100%" }} margin="auto" marginBottom={8}>
      <Heading2 title={title} isCentered={true} />

      <Flex gap="4rem" flexWrap={"wrap"} justifyContent={"space-around"}>
        {content.map((item, index) => (
          <Box
            key={index}
            py="clamp(1.5rem, 5vw, 3rem)"
            px="clamp(1.5rem, 5vw, 3rem)"
            bg="#121212"
            borderRadius={"30% 0 30% 0"}
            w={{ lg: "40%" }}
            as={motion.div}
            initial={{
              transform: "scale(1.3)",
              opacity: [0, 0.3, 0.5, 0.7, 1],
            }}
            whileInView={{
              transform: ["scale(1.3)", "scale(.7)", "scale(1)"],
              opacity: [0, 0.3, 0.5, 0.7, 1],
            }}
            transition={"all 5s .3s ease"}
            viewport={{ once: true }}
          >
            <Heading
              mb={"1rem"}
              as="h4"
              fontSize="1.3rem"
              color={"#ffffffde"}
              textShadow={"0px 1px #000"}
            >
              {item.title}:
            </Heading>
            <Text fontSize="clamp(1.8rem, 5vw, 2.5rem)" color={"#f161a5"}>
              {item.description}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default function Tokenomics() {
  const tokenomicsContent = [
    { title: "Token Supply", description: "1,000,000,000,000" },
    { title: "Taxes", description: "0%" },
    { title: "Liquidity Lock", description: "365 Days" },
    { title: "Contract Ownership", description: "Renounced" },
  ];
  return (
    <Box py={"4rem"} px="2rem" maxW="72rem" mx="auto" id="tokenomics">
      <Card title="tokenomics" content={tokenomicsContent} />
    </Box>
  );
}
