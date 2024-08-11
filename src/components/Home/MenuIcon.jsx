import React from 'react'
import { Button } from '@mui/material'
import guindillaLogotipo from '../../../src/assets/guindillaLogotipo.svg'

const LogoWithName = () => {
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
        src={guindillaLogotipo}
        alt="Logo"
        style={{ height: '40px', width: '79px', cursor: 'pointer' }}
      />
    </Button>
  )
}

export default LogoWithName
