import Header from '../Home/Header'
import { Box, Typography } from '@mui/material'
import YogaVidaPlena from '../../../src/images/yogaVidaPlena.png'
import drones from '../../images/drones.svg'
import pedro from '../../images/pedro.svg'
import avocado from '../../assets/avocado.svg'
import Footer from '../Home/Footer'

const Project = () => {
  const imageContainerStyle = {
    width: '100%', // Limita el ancho máximo del contenedor
    maxWidth: { xs: '375px', md: '500px' }, // Controla el ancho máximo de cada imagen para mantener uniformidad
    textAlign: 'center', // Alinea las imágenes en el centro
    marginBottom: '100px', // Espacio inferior entre secciones
  }

  const imageStyle = {
    width: '100%', // Hace que cada imagen use el ancho completo del contenedor
    height: { xs: '201px', md: '500px' }, // Mantiene la altura fija
    objectFit: 'cover', // Ajusta la imagen para llenar el contenedor sin distorsión
  }

  return (
    <Box>
      <Header />
      <Box sx={{ height: '108px', backgroundColor: '#E40613' }}></Box>
      <Box
        sx={{
          padding: '17px',
          marginBottom: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={imageContainerStyle}>
          <Typography
            variant="paragraph"
            sx={{
              fontSize: '31px',
              fontWeight: 'bold',
              display: { xs: 'block', md: 'none' },
              marginBottom: '150px',
              textAlign: 'left',
            }}
          >
            Diseño gráfico,
            <br /> diseño y desarrollo web, motion graphics, produccion de video{' '}
            <br />y servicios de drones.
          </Typography>
          <a
            href="https://youtu.be/BjnCPeEXEFc?si=02FBOnEiMFbneyZg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={imageStyle} src={YogaVidaPlena} alt="VidaPlena" />
          </a>
          <Typography
            variant="subtitle"
            sx={{
              fontSize: { xs: '25px', md: '32px' },
              fontWeight: { xs: 'regular', md: 'medium' },
              marginTop: '13px',
            }}
          >
            Yoga Vida Plena
          </Typography>
        </Box>

        <Box sx={imageContainerStyle}>
          <a
            href="https://youtu.be/JU3WEZuhkds?si=CIidDCtgp5BYtuMG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={imageStyle} src={pedro} alt="Pedro explainer video" />
          </a>
          <Typography
            variant="subtitle"
            sx={{
              fontSize: { xs: '25px', md: '32px' },
              fontWeight: { xs: 'regular', md: 'medium' },
              marginTop: '13px',
            }}
          >
            Pedro y La Guindilla: Un Viaje de Sabores y Éxito
          </Typography>
        </Box>

        <Box sx={imageContainerStyle}>
          <a
            href="https://youtu.be/j5MZvc0OBM4?si=biPKNEPCT9byo-aP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={imageStyle} src={drones} alt="Drones video" />
          </a>
          <Typography
            variant="subtitle"
            sx={{
              fontSize: { xs: '25px', md: '32px' },
              fontWeight: { xs: 'regular', md: 'medium' },
              marginTop: '13px',
            }}
          >
            Nuestro pueblito
          </Typography>
        </Box>

        <Box sx={imageContainerStyle}>
          <a
            href="https://youtu.be/0gTz8EhqpMY?si=7tobBN9pV9ACCKDD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={imageStyle} src={avocado} alt="Avocado video" />
          </a>
          <Typography
            variant="subtitle"
            sx={{
              fontSize: { xs: '25px', md: '32px' },
              fontWeight: { xs: 'regular', md: 'medium' },
              marginTop: '13px',
            }}
          >
            Motion Graphics
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Project
