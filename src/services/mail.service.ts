// mail.service.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true para 465, false para 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false, // Esto puede ayudar a evitar problemas con el certificado, pero no es recomendable para producción
    },
});



// Función para enviar correos
export const sendEmail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: process.env.MAIL_FROM,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado a:', to);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
};
