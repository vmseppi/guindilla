import emailjs from '@emailjs/nodejs'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

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

      res
        .status(200)
        .json({ success: true, message: 'Email sent successfully!' })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
