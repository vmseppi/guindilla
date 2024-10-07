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
        height: '100px',
        padding: '0px 16px',
      }}
    >
      <Typography
        variant="h1"
        sx={{ color: 'white', fontSize: '42px', fontWeight: 'bold' }}
      >
        Te escuchamos.
      </Typography>
      <Typography
        variant="h2"
        sx={{ color: 'white', fontSize: '12px', fontWeight: 'light' }}
      >
        Diseño grafico/Web. Motion graphics. Produccion de video.
      </Typography>
    </Box>
  )
}

export default SeccionOne
