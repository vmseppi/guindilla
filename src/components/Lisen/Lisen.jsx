import React, { useState, useRef } from 'react'
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
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  const form = useRef()

  console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
  console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
  console.log('User ID:', process.env.NEXT_PUBLIC_EMAILJS_USER_ID)

  

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        'bPvpEdQMcvlpMRrjG',
      )
      .then(
        (result) => {
          console.log(result.text)
          setOpen(true)
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container>
      <Header />
      <Box sx={{ marginTop: { xs: '50px', md: '100px' } }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={sendEmail} ref={form}>
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
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <DialogTitle sx={{ textAlign: 'justify' }}>
          Message sent successfully!
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
