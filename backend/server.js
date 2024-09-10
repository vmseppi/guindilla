require('dotenv').config()

console.log('Email User:', process.env.EMAIL_USER)
console.log('Email Pass:', process.env.EMAIL_PASS)

const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Ruta para manejar GET /
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente.')
})

// Configurar el transporte de correo con Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Cambia esto si usas otro servicio de correo
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Ruta para manejar el envío del correo
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  }

  // Enviar el correo usando Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
      res.status(500).send('Error al enviar el correo.')
    } else {
      console.log('Correo enviado: ' + info.response)
      res.status(200).send('Correo enviado exitosamente.')
    }
  })
})

// Iniciar el servidor
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})
