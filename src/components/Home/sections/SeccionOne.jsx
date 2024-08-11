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
        padding: '10px 0',
      }}
    >
      <Typography
        variant="h1"
        sx={{ color: 'white', fontSize: '42px', fontWeight: 'bold', margin:"0" }}
      >
        Te escuchamos.
      </Typography>
      <Typography
        variant="h2"
        sx={{ color: 'white', fontSize: '12px', fontWeight: 'light', margin:"0" }}
      >
        Diseño grafico/Web. Motion graphics. Produccion de video.
      </Typography>
    </Box>
  )
}

export default SeccionOne
