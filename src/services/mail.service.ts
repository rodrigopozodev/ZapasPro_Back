import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
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
