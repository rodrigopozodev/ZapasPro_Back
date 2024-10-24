import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Asegúrate de que esté configurado como 'smtp.gmail.com'
  port: Number(process.env.SMTP_PORT), // Asegúrate de que esté configurado como 587
  secure: false, // true para 465, false para 587
  auth: {
    user: process.env.SMTP_USER, // Asegúrate de que este sea tu correo de Gmail
    pass: process.env.SMTP_PASS, // Asegúrate de que esto sea tu contraseña de aplicación
  },
  tls: {
    rejectUnauthorized: false, // Esto puede ayudar a evitar problemas con el certificado
  },
});

// Función para probar el envío de correo
const testEmail = async () => {
  const verificationToken = 'tokenDeVerificacion'; // Cambia esto por un token real
  const userEmail = 'rodrigopozosanchez@gmail.com'; // Cambia esto a tu correo personal para la prueba

  const mailOptions = {
    from: process.env.MAIL_FROM, // Asegúrate de que esté configurado en tu .env
    to: userEmail,
    subject: 'Verifica tu cuenta',
    html: `<p>Hola,</p>
           <p>Por favor, verifica tu cuenta haciendo clic en el siguiente enlace:</p>
           <a href="${process.env.FRONTEND_URL}/verify?token=${verificationToken}">Verificar cuenta</a>`,
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
