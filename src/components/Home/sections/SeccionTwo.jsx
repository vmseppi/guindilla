import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import arrowIcon from '../../../assets/arrowIcon.svg'
import guindillaLogotipo from '../../../assets/guindillaLogotipo.svg'

const SeccionTwo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '457px',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '36px',
        paddingBottom: '36px',
        paddingLeft: '16px',
        paddingRight: '16px',
        borderBottom: '4px solid red',
        marginBottom: '20px',
        boxSizing: 'border-box',
      }}
    >
      <img
        src={guindillaLogotipo}
        alt="logotipo"
        style={{ height: '114px', width: '204px', marginBottom: '28px' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            marginBottom: '36px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="title"
            sx={{ fontSize: '23px', fontWeight: 'bold' }}
          >
            Somos La Guindilla
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ fontSize: '12px', fontWeight: 'bold' }}
          >
            Llevamos tus contenidos visuales al siguiente nivel.
          </Typography>
        </Box>

        <Typography
          variant="paragraph"
          sx={{ fontSize: '14px', fontWeight: 'regular' }}
        >
          Nuestro equipo cuenta con experiencia en diseño grafico, diseño y
          desarrollo web, motion graphics, producción de vídeo y servicios con
          drones.
        </Typography>
        <Typography
          variant="paragraph"
          sx={{ fontSize: '14px', fontWeight: 'regular' }}
        >
          Estamos aquí para transformar tus visiones en realidad.
        </Typography>
      </Box>
      <Button
        href="/lisen"
        variant="contained"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '164px',
          maxHeight: '35px',
          backgroundColor: '#ED4F67',
          textTransform: 'none',
          borderRadius: 0,
          padding: '7px',
        }}
      >
        <Typography sx={{ color: 'white', fontSize: '17px' }}>
          Te escuchamos
        </Typography>
        <img
          src={arrowIcon}
          alt="arrow right"
          style={{ height: '14px', width: '10px', marginLeft: '11px' }}
        />
      </Button>
    </Box>
  )
}

export default SeccionTwo
