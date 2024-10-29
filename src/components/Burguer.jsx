import React, { useState } from 'react'
import { SvgIcon, Drawer, List, ListItem, Box, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Burger = () => {
  

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const redirectToLisen = () => {
    navigate('/lisen')
    toggleDrawer()
  }

  const redirectToHome = () => {
    navigate('/')
    toggleDrawer()
  }

  const redirectToProyect = () => {
    navigate('/proyect')
    toggleDrawer()
  }

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        zIndex: 1300,
      }}
    >
      <SvgIcon
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_30)">
            <path
              d="M6.5 6H11.5C11.7652 6 12.0196 6.10536 12.2071 6.29289C12.3946 6.48043 12.5 6.73478 12.5 7C12.5 7.26522 12.3946 7.51957 12.2071 7.70711C12.0196 7.89464 11.7652 8 11.5 8H6.5C6.23478 8 5.98043 7.89464 5.79289 7.70711C5.60536 7.51957 5.5 7.26522 5.5 7C5.5 6.73478 5.60536 6.48043 5.79289 6.29289C5.98043 6.10536 6.23478 6 6.5 6ZM13.5 14H18.5C18.7652 14 19.0196 14.1054 19.2071 14.2929C19.3946 14.4804 19.5 14.7348 19.5 15C19.5 15.2652 19.3946 15.5196 19.2071 15.7071C19.0196 15.8946 18.7652 16 18.5 16H13.5C13.2348 16 12.9804 15.8946 12.7929 15.7071C12.6054 15.5196 12.5 15.2652 12.5 15C12.5 14.7348 12.6054 14.4804 12.7929 14.2929C12.9804 14.1054 13.2348 14 13.5 14ZM6.5 10H18.5C18.7652 10 19.0196 10.1054 19.2071 10.2929C19.3946 10.4804 19.5 10.7348 19.5 11C19.5 11.2652 19.3946 11.5196 19.2071 11.7071C19.0196 11.8946 18.7652 12 18.5 12H6.5C6.23478 12 5.98043 11.8946 5.79289 11.7071C5.60536 11.5196 5.5 11.2652 5.5 11C5.5 10.7348 5.60536 10.4804 5.79289 10.2929C5.98043 10.1054 6.23478 10 6.5 10Z"
              fill="#022A38"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_30">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </SvgIcon>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        variant="persistent"
        PaperProps={{
          style: {
            position: 'absolute',
            top: '91px',
            height: '120px',
            backgroundColor: '#ED4F67',
            padding: '10px 16px',
            boxSizing: 'content-box',
          },
        }}
      >
        <List>
          <ListItem>
            <Link
              primary="Home"
              onClick={redirectToHome}
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Inicio
            </Link>
          </ListItem>
          <ListItem>
            <Link
              primary="Lisen"
              onClick={redirectToProyect}
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Proyectos
            </Link>
          </ListItem>
          <ListItem>
            <Link
              primary="Lisen"
              onClick={redirectToLisen}
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Contacto
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}

export default Burger
