import React from 'react'
import Carousel from 'react-material-ui-carousel'
import YogaVidaPlena from '../../../src/images/yogaVidaPlena.png'
import Pig from '../../images/Pig.png'
import motionGrapher from '../../images/motionGrapher.jpg'
import { Box, Typography } from '@mui/material'

const CarrouselSeccion = () => {
  const containerStyle = {
    height: '214px', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    overflow: 'hidden', 
    marginTop: 10,
    marginBottom: 10,
  }

  const imageStyle = {
    width: '100%',
    height: 'auto', // Asegura que la imagen mantenga su proporción
    maxHeight: '600px',
    objectFit: 'cover',
  }

  return (
    <>
      <Typography
        variant="title"
        sx={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '36px' }}
      >
        Nuestros trabajos.
      </Typography>
      <Carousel
        cols={2}
        rows={1}
        gap={10}
        indicators={false}
        sx={{
          marginTop: '40px',marginBottom:"40px"
        }}
      >
        <Box style={containerStyle}>
          <img style={imageStyle} src={YogaVidaPlena} alt="VidaPlena" />
        </Box>
        <Box style={containerStyle}>
          <img style={imageStyle} src={motionGrapher} alt="MotionGraphics" />
        </Box>
        <Box style={containerStyle}>
          <img style={imageStyle} src={Pig} alt="Pig" />
        </Box>
      </Carousel>
    </>
  )
}

export default CarrouselSeccion
