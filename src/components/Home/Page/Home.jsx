import React from 'react'
import Header from '../Header'
import SeccionOne from '../sections/SeccionOne'
import CarrouselSeccion from '../CarrouselSeccion'
import SeccionTwo from '../sections/SeccionTwo'
import Footer from '../Footer'
import GridProject from '../../../components/Home/Projects/GridProject'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const Home = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <>
      <Header />
      <SeccionOne />
      <SeccionTwo />
      {isDesktop ? <GridProject /> : <CarrouselSeccion />}
      <Footer />
    </>
  )
}
export default Home
