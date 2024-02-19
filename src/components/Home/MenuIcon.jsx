import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Guindilla from "../../../src/Guindilla.png";

const LogoWithName = () => {
  return (
    <Button
      component="a"
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        border: "2px solid black",
        borderRadius: "20px",
        padding: "5px 20px",
        textTransform: "none",
      }}
    >
      <img
        src={Guindilla}
        alt="Logo"
        style={{ height: "40px", marginRight: "10px", cursor: "pointer" }}
      />
      <Typography
        variant="h6"
        style={{ textTransform: "none", color: "black" }}
      >
        La Guindilla
      </Typography>
    </Button>
  );
};

export default LogoWithName;
