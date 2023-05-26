import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Heading2 from "./Heading2";
import RoadmapCard from "./RoadmapCard";

const roadmapContent = [
  {
    title: "Phase 1",
    description:
      "Launch, CoinGecko/Coinmarketcap Listings, 1500 + Holders, Get $Wondercat Trending on twitter with our artworks and supporters.",
    image: "/img/photo_1.jpg",
  },
  {
    title: "Phase 2",
    description:
      "Community Partnerships, Free Wondercats merch for first 500 holders, CEX Listings 10,000+ holders.",
    image: "/img/photo_4.jpg",
  },
  {
    title: "Phase 3",
    description:
      "Free Wondercats merch for all holders, Airdrop to holders by making a contest.",
    image: "/img/photo_3.jpg",
  },
];

export default function Road() {
  return (
    <Box py={"4rem"} px="2rem" maxW="72rem" mx="auto" id="road">
      <Heading2 title={"road map"} isCentered={true} />

      <VStack>
        {roadmapContent.map((item, index) => (
          <RoadmapCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </VStack>
    </Box>
  );
}
