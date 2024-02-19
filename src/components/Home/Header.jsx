import React from "react"
import Burger from "../Burguer"
import { Stack } from "@mui/material"
import MenuIcon from "../../components/Home/MenuIcon"

const Header = () => {
  return (
    <Stack
      direction={{ xs: "row", md: "row" }}
      justifyContent={"space-between"}
      spacing={{ xs: "12px", md: "0px" }}
      alignItems={"center"}
      marginTop={"20px"}
      marginBottom={"20px"}
    >
      <MenuIcon />
      <Burger />
    </Stack>
  )
}

export default Header
