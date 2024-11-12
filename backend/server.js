const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware para CORS y para interpretar JSON
app.use(cors());
app.use(express.json()); // Esto permite que el backend procese JSON

// Verificar si las variables de entorno están definidas
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

if (!emailUser || !emailPass) {
  console.warn('Advertencia: Las credenciales de correo no están definidas. El correo solo funcionará en producción.');
}

// Configurar el transporte de correo solo si hay credenciales disponibles
const transporter = emailUser && emailPass
  ? nodemailer.createTransport({
      service: 'gmail', // Cambia esto si usas otro servicio de correo
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })
  : null;

// Ruta para manejar GET en la raíz, solo para ver si el servidor responde
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente.');
});

// Ruta para manejar el envío del correo
app.post('/send-email', (req, res) => {
  // Verifica si el transportador de correo está configurado
  if (!transporter) {
    console.log('Correo omitido en desarrollo: No se configuraron credenciales');
    return res.status(200).send('Correo omitido en desarrollo');
  }

  // Extrae los datos del cuerpo de la solicitud
  const { name, email, message } = req.body;

  // Configuración de los detalles del correo electrónico
  const mailOptions = {
    from: email,
    to: emailUser,
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  // Enviar el correo usando Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send('Error al enviar el correo.');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado exitosamente.');
    }
  });
});

// Iniciar el servidor en el puerto configurado
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});