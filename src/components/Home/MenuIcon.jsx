import React from 'react'
import { Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import guindillaLogotipo from '../../../src/assets/guindillaLogotipo.svg'
import logoDesktop from '../../../src/assets/logoDesktop.svg'

const LogoWithName = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Button
      component="a"
      href="/"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src={isDesktop ? logoDesktop : guindillaLogotipo}
        alt="Logo"
        style={{
          height: '40px',
          width: '79px',
          cursor: 'pointer',
          display: { xs: 'block', md: 'none' },
        }}
      />
    </Button>
  )
}

export default LogoWithName
