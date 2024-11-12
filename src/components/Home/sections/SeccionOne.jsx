import React from 'react'
import { Typography, Box } from '@mui/material'

const SeccionOne = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E40613',
        height: { xs: '100px', lg: '431px' },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: 'white',
          fontSize: { xs: '42px',lg:"148px" },
          fontWeight: 'bold',
        }}
      >
        Te escuchamos.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          fontSize: { xs: '12px', lg: '42px' },
          fontWeight: 'light',
          fontFamily: 'Roboto',
        }}
      >
        Diseño grafico/Web. Motion graphics. Produccion de video.
      </Typography>
    </Box>
  )
}

export default SeccionOne
