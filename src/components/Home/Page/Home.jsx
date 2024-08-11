import React from "react";
import { Container } from "@mui/material";
import Header from "../Header";
import SeccionOne from "../sections/SeccionOne";
import CarrouselSeccion from "../CarrouselSeccion";
import SeccionTwo from "../sections/SeccionTwo";
import Footer from "../Footer";


const Home = () => {
  return (
    <Container>
      <Header />
      <SeccionOne />
      <SeccionTwo />
      <CarrouselSeccion />
      <Footer /> 
    </Container>
  );
};
export default Home;
