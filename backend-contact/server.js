require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta para enviar correo
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Configurar transporte de correo
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Tu correo
      pass: process.env.EMAIL_PASS, // Tu contraseña o app password
    },
  });

  // Configurar el contenido del email
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Tu correo de destino
    subject: `Nuevo mensaje de ${name}`,
    text: `De: ${name} (${email})\n\nMensaje:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Mensaje enviado con éxito" });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    res.status(500).json({ success: false, message: "Error enviando el correo" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
