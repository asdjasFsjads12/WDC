import { AspectRatio, Box } from "@chakra-ui/react";
import React from "react";

export default function Video() {
  return (
    <Box py={"rem"}>
      <AspectRatio ratio={16/8} maxW={"50rem"} mx={"auto"} borderRadius={"1rem"}>
        <video autoPlay controls>
          <source src="/wonder_video.mp4" type="video/mp4" />
        </video>
      </AspectRatio>
    </Box>
  );
}
