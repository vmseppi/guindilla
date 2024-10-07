import React from 'react'
import Carousel from 'react-material-ui-carousel'
import YogaVidaPlena from '../../../src/images/yogaVidaPlena.png'
import drones from '../../images/drones.svg'
import pedro from '../../images/pedro.svg'
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
    height: 'auto',
    maxHeight: '600px',
    objectFit: 'cover',
  }

  return (
    <Box sx={{ padding: '0px 16px' }}>
      <Typography variant="title" sx={{ fontSize: '23px', fontWeight: 'bold' }}>
        Nuestros trabajos.
      </Typography>
      <Carousel
        cols={2}
        rows={1}
        gap={10}
        indicators={false}
        sx={{
          marginBottom: '40px',
        }}
      >
        <Box style={containerStyle}>
          <a
            href="https://youtu.be/BjnCPeEXEFc?si=02FBOnEiMFbneyZg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={imageStyle} src={YogaVidaPlena} alt="VidaPlena" />
          </a>
        </Box>
        <Box style={containerStyle}>
          <a
            href="https://youtu.be/j5MZvc0OBM4?si=biPKNEPCT9byo-aP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={imageStyle} src={drones} alt="drones video" />
          </a>
        </Box>
        <Box style={containerStyle}>
          <a
            href="https://youtu.be/JU3WEZuhkds?si=CIidDCtgp5BYtuMG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={imageStyle} src={pedro} alt="pedro explainer video" />
          </a>
        </Box>
      </Carousel>
    </Box>
  )
}

export default CarrouselSeccion
