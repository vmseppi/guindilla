import React from "react";
import Carousel from "react-material-ui-carousel";
import YogaVidaPlena from "../../../src/images/yogaVidaPlena.png";
import Pig from "../../images/Pig.png";
import motionGrapher from "../../images/motionGrapher.jpg";
import { Box } from "@mui/material";

const CarrouselSeccion = () => {
  const imageStyle = {
    width: "100%",
    maxHeight: "600px",
    objectFit: "cover",
    marginTop: 10,
    marginBottom: 10,
  };

  return (
    <Carousel
      cols={2}
      rows={1}
      gap={10}
      sx={{
        marginTop: "40px",
      }}
    >
      <Box>
        <img style={imageStyle} src={YogaVidaPlena} alt="VidaPlena" />
      </Box>
      <Box>
        <img style={imageStyle} src={motionGrapher} alt="MotionGraphics" />
      </Box>
      <Box>
        <img style={imageStyle} src={Pig} alt="Pig" />
      </Box>
    </Carousel>
  );
};

export default CarrouselSeccion;
