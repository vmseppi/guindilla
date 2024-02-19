import React, { useState } from "react";
import { IconButton, Drawer, List, ListItem, Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Burger = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const redirectToLisen = () => {
    navigate("/lisen");
    toggleDrawer();
  };

  const redirectToHome = () => {
    navigate("/");
    toggleDrawer();
  };

  return (
    <Box style={{ display: "flex", justifyContent: "flex-end" }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem>
            <Link
              primary="Home"
              onClick={redirectToHome}
              sx={{
                color: "black",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              La Guindilla
            </Link>
          </ListItem>
          <ListItem>
            <Link
              primary="Lisen"
              onClick={redirectToLisen}
              sx={{
                color: "black",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Te escuchamos
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Burger;
