import { Heading } from "@chakra-ui/react";
import React from "react";

export default function Heading2({title, isCentered}) {
  return (
    <Heading
      as="h2"
      letterSpacing={".4rem"}
      mb={"10"}
      fontSize={"clamp(4rem, 10vw, 6rem)"}
      fontFamily={"'Kenia', cursive"}
      textAlign={isCentered && "center"}
    >{title}</Heading>
  );
}
