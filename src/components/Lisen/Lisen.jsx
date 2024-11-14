import React, { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@mui/material'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      if (response.ok) {
        setOpen(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setError(true)
        console.error('Error al enviar el correo')
      }
    } catch (error) {
      setError(true)
      console.error('Error en la solicitud:', error)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setError(false)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box sx={{ height: '108px', backgroundColor: '#E40613' }}></Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: '36px',
            padding: '16px',
            paddingBottom: '92px',
            maxWidth: { xs: '375px', md: '847px' },
          }}
        >
          <Typography
            variant="title"
            sx={{ fontSize: '23px', fontWeight: 'bold' }}
          >
            Te escuchamos.
          </Typography>
          <br />
          <Typography
            variant="subtitle"
            sx={{ fontSize: '14px', marginBottom: '36px' }}
          >
            Cuéntanos tu proyecto y nos pondremos en contacto contigo para
            hacerlo llevarlo a cabo.
          </Typography>
          <Box>
            <form onSubmit={sendEmail}>
              <TextField
                fullWidth
                label="Name"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
                variant="outlined"
                InputProps={{
                  style: {
                    borderWidth: '0',
                    borderColor: 'black',
                    borderStyle: 'solid',
                    borderRadius: '0px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: 'black',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="from_email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                variant="outlined"
                InputProps={{
                  style: {
                    borderWidth: '0',
                    borderColor: 'black',
                    borderStyle: 'solid',
                    borderRadius: '0px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: 'black',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Mensaje"
                name="message"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                required
                variant="outlined"
                InputProps={{
                  style: {
                    borderWidth: '0',
                    borderColor: 'black',
                    borderStyle: 'solid',
                    borderRadius: '0px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: 'black',
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#ED4F67',
                  color: 'white',
                  borderRadius: '0px',
                  padding: '10px',
                  width: '100%',
                  marginTop: '28px',
                  fontSize: { xs: '14px', md: '39px' },
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Roboto',
                  '&:hover': {
                    backgroundColor: 'darkred',
                  },
                }}
              >
                ENVIAR
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', marginTop: 'auto' }}>
        <Footer />
      </Box>

      <Dialog
        open={open || error}
        onClose={handleClose}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <DialogTitle sx={{ textAlign: 'justify' }}>
          {error ? 'Error sending message!' : 'Message sent successfully!'}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ContactForm
