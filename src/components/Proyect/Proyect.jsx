import Header from '../../components/Home/Header'
import { Box, Typography } from '@mui/material'
import YogaVidaPlena from '../../../src/images/yogaVidaPlena.png'
import drones from '../../images/drones.svg'
import pedro from '../../images/pedro.svg'
import avocado from '../../assets/avocado.svg'
import Footer from '../Home/Footer'

const Proyect = () => {
  const imageStyle = {
    width: '100%',
    height: 'auto',
  }

  return (
    <Box>
      <Header />
      <Box sx={{ height: '108px', backgroundColor: '#E40613' }}></Box>
      <Box sx={{ padding: '17px', marginBottom: '100px' }}>
        <Typography
          variant="paragraph"
          sx={{ fontSize: '31px', fontWeight: 'bold' }}
        >
          Diseño gráfico,
          <br /> diseño y desarrollo web, motion graphics, produccion de video{' '}
          <br />y servicios de drones.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '100px',
          }}
        >
          <a
            href="https://youtu.be/BjnCPeEXEFc?si=02FBOnEiMFbneyZg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={imageStyle} src={YogaVidaPlena} alt="VidaPlena" />
          </a>
          <Typography
            variant="subtitle"
            sx={{ fontSize: '25px', fontWeight: 'regular', marginTop: '13px' }}
          >
            Yoga Vida Plena
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '100px',
          }}
        >
          <a
            href="https://youtu.be/JU3WEZuhkds?si=CIidDCtgp5BYtuMG"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%' }}
          >
            <img style={imageStyle} src={pedro} alt="pedro explainer video" />
          </a>
          <Typography
            variant="subtitle"
            sx={{ fontSize: '25px', fontWeight: 'regular', marginTop: '13px' }}
          >
            Pedro y La Guindilla: Un Viaje de Sabores y Éxito
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '100px',
          }}
        >
          <a
            href="https://youtu.be/j5MZvc0OBM4?si=biPKNEPCT9byo-aP"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%' }}
          >
            <img style={imageStyle} src={drones} alt="drones video" />
          </a>
          <Typography
            variant="subtitle"
            sx={{ fontSize: '25px', fontWeight: 'regular', marginTop: '13px' }}
          >
            Nuestro pueblito
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '100px',
          }}
        >
          <a
            href="https://youtu.be/0gTz8EhqpMY?si=7tobBN9pV9ACCKDD"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%' }}
          >
            <img style={imageStyle} src={avocado} alt="drones video" />
          </a>
          <Typography
            variant="subtitle"
            sx={{ fontSize: '25px', fontWeight: 'regular', marginTop: '13px' }}
          >
            Motion Graphics Sample - La Guindilla
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Proyect
