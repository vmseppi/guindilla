import React from "react";
import { Container } from "@mui/material";
import Header from "../Header";
import SeccionOne from "../SeccionOne";
import CarrouselSeccion from "../CarrouselSeccion";
import SeccionThree from "../SeccionThree";
import WeAre from "../WeAre";

const Home = () => {
  return (
    <Container>
      <Header />
      <SeccionOne />
      <WeAre />
      <CarrouselSeccion />
      <SeccionThree />
    </Container>
  );
};
export default Home;
