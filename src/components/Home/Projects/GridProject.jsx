import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import YogaVidaPlena from '../../../../src/images/yogaVidaPlena.png'
import drones from '../../../images/drones.svg'
import pedro from '../../../images/pedro.svg'
import avocado from '../../../assets/avocado.svg'

export default function GridProject() {
  
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
  };

  const imageContainerStyle = {
    width: '100%',
    maxWidth: '300px',
    height: '200px', 
    overflow: 'hidden',
    margin: '0 auto',
  };

  const projects = [
    {
      src: YogaVidaPlena,
      alt: 'Yoga Vida Plena',
      title: 'Video de producto',
      link: 'https://youtu.be/BjnCPeEXEFc?si=02FBOnEiMFbneyZg',
    },
    {
      src: pedro,
      alt: 'Pedro Explainer Video',
      title: 'Explainer Video',
      link: 'https://youtu.be/JU3WEZuhkds?si=CIidDCtgp5BYtuMG',
    },
    {
      src: drones,
      alt: 'Drones Video',
      title: 'Drones',
      link: 'https://youtu.be/j5MZvc0OBM4?si=biPKNEPCT9byo-aP',
    },
    {
      src: avocado,
      alt: 'Avocado Motion Graphics',
      title: 'Motion Graphics',
      link: 'https://youtu.be/0gTz8EhqpMY?si=7tobBN9pV9ACCKDD',
    },
  ]

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontSize: '32px',
          marginLeft: '72px',
          marginTop: '35px',
          fontWeight: 'bold',
        }}
      >
        Nuestros trabajos
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ padding: '45px 198px', justifyContent: 'center' }}
      >
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Box padding={2} textAlign="center">
              <Box sx={imageContainerStyle}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img style={imageStyle} src={project.src} alt={project.alt} />
                </a>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: '20px',
                  fontWeight: 'regular',
                  marginTop: '13px',
                }}
              >
                {project.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
