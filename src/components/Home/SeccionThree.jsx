import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"

const SeccionThree = () => {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        paddingBottom: { md: 24 },
        p: 0,
        m: 0,
        marginBottom: "20px",
      }}
    >
      <Card
        component="li"
        sx={{
          minWidth: 300,
          flexGrow: 1,
          marginTop: 10,
          height: { sm: 300, md: 600 },
        }}
      >
        <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/BjnCPeEXEFc"
          allowfullscreen
        />
      </Card>
      <Card
        component="li"
        sx={{
          minWidth: 300,
          flexGrow: 1,
          marginTop: 10,
          height: { sm: 300, md: 600 },
        }}
      >
        <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/0gTz8EhqpMY"
          allowfullscreen
        />
      </Card>
    </Box>
  )
}

export default SeccionThree
