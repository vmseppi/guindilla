import emailjs from '@emailjs/nodejs'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, error: 'Todos los campos son requeridos.' })
    }

    try {
      const result = await emailjs.send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        process.env.USER_ID,
      )

      return res
        .status(200)
        .json({ success: true, message: 'Email sent successfully!' })
    } catch (error) {
      console.error('Error sending email:', error.message)
      return res.status(500).json({ success: false, error: error.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
