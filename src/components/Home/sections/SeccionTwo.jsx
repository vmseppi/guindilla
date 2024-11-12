import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import arrowIcon from '../../../assets/arrowIcon.svg'
import guindillaLogotipo from '../../../assets/guindillaLogotipo.png'

const SeccionTwo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        height: { xs: 'auto', lg: '612px' },
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '36px',
        paddingBottom: '36px',
        paddingLeft: { xs: '16px', lg: '123px' },
        paddingRight: { xs: '16px', lg: '123px' },
        borderBottom: '4px solid red',
        marginBottom: '20px',
        boxSizing: 'content-box',
        gap: { xs: '16px', lg: '32px' },
      }}
    >
      <Box
        component="img"
        src={guindillaLogotipo}
        alt="logotipo"
        sx={{
          height: { xs: '114px', lg: '181px' },
          width: { xs: '100%', lg: '480px' },
          maxWidth: { xs: '204px', lg: '480px' }, 
          marginBottom: { xs: '28px', lg: 0 },
          objectFit: 'contain', 
        }}
      />
      <Box
        sx={{
          height: { xs: '100%', lg: '357px' },
          width: { xs: '100%', lg: '50%' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', lg: 'flex-start' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
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
              sx={{ fontSize: { xs: '23px', lg: '32px' }, fontWeight: 'bold' }}
            >
              Somos La Guindilla
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ fontSize: { xs: '12px', lg: '20px' }, fontWeight: 'bold' }}
            >
              Llevamos tus contenidos visuales al siguiente nivel.
            </Typography>
          </Box>

          <Typography
            variant="paragraph"
            sx={{
              fontSize: { xs: '14px', lg: '24px' },
              fontWeight: 'regular',
              marginBottom: '20px',
            }}
          >
            Nuestro equipo cuenta con experiencia en diseño gráfico, diseño y
            desarrollo web, motion graphics, producción de vídeo y servicios con
            drones.
          </Typography>
          <Typography
            variant="paragraph"
            sx={{
              fontSize: { xs: '14px', lg: '24px' },
              fontWeight: 'regular',
              marginBottom: '20px',
            }}
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
            maxWidth: { xs: '164px', lg: '242px' },
            maxHeight: { xs: '35px', lg: '52px' },
            backgroundColor: '#ED4F67',
            textTransform: 'none',
            borderRadius: 0,
            padding: { xs: '7px', lg: '11px' },
          }}
        >
          <Typography
            sx={{ color: 'white', fontSize: { xs: '14px', lg: '24px' } }}
          >
            Te escuchamos
          </Typography>
          <Box
            component="img"
            src={arrowIcon}
            alt="arrow right"
            sx={{
              height: { xs: '14px', lg: '21px' },
              width: { xs: '10px', lg: '15px' },
              marginLeft: '11px',
            }}
          />
        </Button>
      </Box>
    </Box>
  )
}

export default SeccionTwo
