import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Somos from "../../assets/Somos.mp4";

const WeAre = () => {
  return (
    <Card
      sx={{
        marginTop: "40px",
      }}
    >
      <video
        width="100%"
        maxHeight="600px"
        objectFit="cover"
        controls
        poster="path-to-your-poster-image.jpg"
        marginTop={2}
      >
        <source src={Somos} type="video/mp4" />
      </video>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Nosotros somos La Guindilla
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Te mostramos quienes somos
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeAre;
