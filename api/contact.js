import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const { name, email, message } = req.body

  // Configuración de transporte de correo
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `Mensaje de: ${name} (${email})\n\n${message}`,
    replyTo: email,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Email enviado!' })
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    res.status(500).json({ message: 'Error al enviar el correo' })
  }
}
