import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const RoadmapCard = ({ title, description, image }) => {
  return (
    <Box
      boxShadow="lg"
      borderRadius="lg"
      p={4}
      maxW={{ base: "100%" }}
      mx="auto"
      my={4}
      as={motion.div}
      initial={{
        transform: "translateY(5rem)",
        opacity: [0, 0.3, 0.5, 0.7, 1],
      }}
      whileInView={{
        transform: "translateY(0rem)",
        opacity: [0, 0.3, 0.5, 0.7, 1],
      }}
      transition={"all 1s .3s ease"}
      viewport={{once: true}}
    >
      <Flex direction={{ base: "column", md: "row" }} alignItems="center">
        <Image
          src={image}
          alt={title}
          boxSize={100}
          borderRadius="lg"
          mr={{ base: 0, md: 4 }}
        />

        <Box flex="1">
          <Text fontWeight="bold" fontSize="xl" mb={2}>
            {title}
          </Text>
          <Text>{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default RoadmapCard;
