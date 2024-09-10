import React, { useState } from 'react'
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@mui/material'
import Header from '../Home/Header'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3001/send-email', {
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
        setOpen(true) // Mostrar mensaje de éxito
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setError(true) // Mostrar mensaje de error si la respuesta no es 200 OK
        console.error('Error al enviar el correo')
      }
    } catch (error) {
      setError(true) // Mostrar mensaje de error en caso de una excepción
      console.error('Error en la solicitud:', error)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setError(false)
  }

  return (
    <Container>
      <Header />
      <Box sx={{ marginTop: { xs: '50px', md: '100px' } }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={sendEmail}>
          <TextField
            fullWidth
            label="Your Name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Your Email"
            name="from_email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <a href="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                Back
              </Button>
            </a>
            <Button type="submit" variant="contained" color="error">
              Submit
            </Button>
          </Box>
        </form>
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
    </Container>
  )
}

export default ContactForm
