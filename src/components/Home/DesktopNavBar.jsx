import React, { useState } from 'react'
import { Box, IconButton, Button, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

const DesktopNavbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  const redirectToHome = () => {
    navigate('/')
    setOpen(false)
  }

  const redirectToProyect = () => {
    navigate('/proyect')
    setOpen(false)
  }

  const redirectToLisen = () => {
    navigate('/lisen')
    setOpen(false)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px',
        backgroundColor: 'white',
        padding: '0 16px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Contenedor de los enlaces */}
      <Box
        sx={{
          position: 'relative',
          top: 0,
          right: 0,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.s ease-in-out',
          transform: open ? 'translateX(0)' : 'translateX(200%)',
          padding: '0 16px',
          zIndex: 10,
        }}
      >
        <Link
          onClick={redirectToHome}
          sx={{
            color: 'black',
            fontWeight: 'bold',
            textDecoration: 'none',
            cursor: 'pointer',
            marginRight: '16px',
          }}
        >
          Inicio
        </Link>
        <Link
          onClick={redirectToProyect}
          sx={{
            color: 'black',
            fontWeight: 'bold',
            textDecoration: 'none',
            cursor: 'pointer',
            marginRight: '16px',
          }}
        >
          Proyectos
        </Link>
        <Link
          onClick={redirectToLisen}
          sx={{
            color: 'black',
            fontWeight: 'bold',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Contacto
        </Link>
      </Box>
      <IconButton
        onClick={toggleMenu}
        sx={{
          color: 'black',
          zIndex: '1000',
          width: '60px',
          height: '100px',
          borderRadius: '0px',
          backgroundColor: 'white',
          marginRight: '-26px',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: 'none',
          },
          '&:active': {
            backgroundColor: 'white',
            boxShadow: 'none',
          },
          '&:focus': {
            backgroundColor: 'white',
            boxShadow: 'none',
          },
          boxShadow: 'none',
          textTransform: 'none',
        }}
      >
        <MenuIcon
          sx={{ backgroundColor: 'white', width: '52px', height: '40px' }}
        />
      </IconButton>
    </Box>
  )
}

export default DesktopNavbar
