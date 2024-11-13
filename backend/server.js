const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // Para procesar datos del formulario
const nodemailer = require("nodemailer"); // Si usas nodemailer para enviar correos

const app = express();

// Middleware para procesar JSON y datos de formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura la ruta para manejar el formulario en /send-email
app.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body; // Asegúrate de que los campos coincidan con tu formulario

  // Configuración de transporte de correo, reemplaza con tu configuración
  const transporter = nodemailer.createTransport({
    service: "gmail", // o el servicio que uses
    auth: {
      user: process.env.EMAIL_USER, // Tu email
      pass: process.env.EMAIL_PASS, // Tu contraseña de email
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // El destinatario del email
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email enviado!");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).send("Error al enviar el correo");
  }
});

// Sirve los archivos estáticos de React desde la carpeta `build`
app.use(express.static(path.join(__dirname, "../build")));

// Redirige todas las demás rutas al index.html para que React Router las maneje
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Configura el puerto y escucha las solicitudes
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
