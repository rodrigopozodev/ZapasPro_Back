import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false, // Cambiar a true si estás usando el puerto 465
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Función para probar el envío de correo
const testEmail = async () => {
  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: 'rodrigopozosanchez@gmail.com', // Cambia esto a tu correo personal para la prueba
    subject: 'Prueba de envío de correo',
    text: 'Este es un mensaje de prueba desde Nodemailer.',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

// Ejecutar la prueba
testEmail();
