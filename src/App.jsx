import { Box, Container, Img } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Video from "./components/Video";
import About from "./components/About";
import HowToBuy from "./components/HowToBuy";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Tokenomics from "./components/Tokenomics";
import Road from "./components/Road";

function App() {
  return (
    <Container maxW={"unset"} p={"0"} bg={"#f6bfd4"} overflow={"hidden"}>
      <Navbar />
        <Jumbotron />
        <Divider/>
        <About />
        <Divider/>
        <HowToBuy />
        <Divider/>
        <Tokenomics/>
        <Divider/>
        <Road/>
        <Divider/>
      <Footer/>
    </Container>
  );
}

export default App;
