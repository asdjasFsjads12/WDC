import { Box, Button, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import Heading2 from "./Heading2";
import { motion } from "framer-motion";

const steps = [
  {
    title: "create a wallet",
    description:
      "download safepal wallet or any wallet of choice from the app store or google play store for free.",
    imgtype: "svg",
    imgname: "safepal",
  },
  {
    title: "get some bnb",
    description:
      "you need bnb in your wallet to swap for some $Wondercats token. If you don’t have any bnb, you can buy directly on safepal wallet, transfer from another wallet, or buy on another exchange and send it to your wallet.",
    imgtype: "png",
    imgname: "bnb",
  },
  {
    title: "go to pancakeswap",
    description:
      "connect to wallet to pancakeswap. Go to pancakeswap.finance in google chrome or on the browser inside your safepal wallet. Connect your wallet. Paste the $Wondercat token address into pancakeswap, select Wondercats  token, and confirm when safepal wallet message pops up for a wallet signature, sign.",
    imgtype: "png",
    imgname: "pancakeswap",
  },
  {
    title: "switch bnb for $wondercats",
    description:
      "switch bnb for $Wondercats. To buy you do not need to increase the slippage tolerance because it is a tax free transaction, sometimes you will need to increase slippage tolerance due to the market surge.",
    imgtype: "png",
    imgname: "bnb",
    // imgname2: ""
  },
];

const Card = ({ step, index }) => {
  const { title, description, imgtype, imgname } = step;
  return (
    <Flex
      bg="#f161a5"
      borderRadius={"1.5rem"}
      px={"clamp(1rem, 7vw, 3rem)"}
      py="2rem"
      color={"#ffffffde"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={"4"}
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
      viewport={{ once: true }}
    >
      <Box w="7rem" mx="auto" order={index % 2 === 0 ? "2" : "1"}>
        <Img src={`/${imgname}.${imgtype}`} alt={`${imgname}`} />
      </Box>
      <Box
        w={{ base: "100%", md: "calc(90% - 7rem)" }}
        order={{ base: "2", md: index % 2 === 0 ? "1" : "2" }}
      >
        <Heading
          mb={"1rem"}
          as="h4"
          fontSize="clamp(1.8rem, 7vw, 2.5rem)"
          textShadow={"0 1px black"}
        >
          {title}
        </Heading>
        <Text
          fontSize={"clamp(1.1rem, 5vw, 1.3rem)"}
          lineHeight={"1.5rem"}
          textShadow={"0 1px black"}
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default function HowToBuy() {
  return (
    <Box py={"4rem"} px="2rem" maxW="72rem" mx="auto" id="steps">
      <Heading2 title="how to buy" isCentered={true} />
      <Flex flexWrap={"wrap"} gap="6" justifyContent={"space-between"}>
        {steps.map((step, index) => (
          <Card step={step} index={index + 1} key={index} />
        ))}
      </Flex>
      <Flex justifyContent={"center"}>
        <Link
          bg="black"
          color={"#f161a5"}
          textShadow={"0 1px white"}
          fontSize="clamp(1.8rem, 7vw, 2.5rem)"
          mt={"4rem"}
          px="2rem"
          pt="1rem"
          borderRadius={"2rem"}
          pb="1.5rem"
          target="_blank"
          href="https://pancakeswap.finance/swap?outputCurrency=0xa8a44c08f53870D9dA3b6c2d9C45D7D27D08AF40"
          _hover={{ bg: "#f161a5", color: "white", textShadow: "0 1px black" }}
          as={motion.a}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={"all 1s ease"}
          viewport={{ once: true }}
        >
          Buy Now
        </Link>
      </Flex>
    </Box>
  );
}
