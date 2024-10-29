import React from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Burger from '../Burguer'
import { Stack } from '@mui/material'
import MenuIcon from '../../components/Home/MenuIcon'
import DesktopNavbar from './DesktopNavBar'

const Header = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Stack
      direction={{ xs: 'row', md: 'row' }}
      justifyContent={'space-between'}
      spacing={{ xs: '12px', md: '0px' }}
      alignItems={'center'}
      marginTop={'20px'}
      marginBottom={'20px'}
      padding={'0px 16px'}
      height={'56px'}
    >
      <MenuIcon />
      {isDesktop ? <DesktopNavbar /> : <Burger />}
    </Stack>
  )
}

export default Header
