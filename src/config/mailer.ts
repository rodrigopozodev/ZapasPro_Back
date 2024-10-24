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



// Función genérica para enviar correos
export const sendEmail = async (to: string, subject: string, htmlContent: string) => {
    const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER, // El correo de quien envía
        to, // El destinatario
        subject, // Asunto del correo
        html: htmlContent, // Contenido en HTML
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Correo enviado a: ${to}`); // Mensaje de confirmación
    } catch (error) {
        console.error('Error al enviar el correo:', error); // Error detallado
        throw new Error('No se pudo enviar el correo');
    }
};

// Función específica para enviar el correo de verificación
export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const verificationUrl = `${process.env.FRONTEND_URL}/verify?token=${verificationToken}`;
    const subject = 'Verificación de correo electrónico';
    const htmlContent = `
        <p>Por favor, verifica tu correo electrónico haciendo clic en el siguiente enlace:</p>
        <a href="${verificationUrl}">Verificar correo</a>
    `;

    try {
        await sendEmail(email, subject, htmlContent);
        console.log('Correo de verificación enviado a:', email);
    } catch (error) {
        console.error('Error al enviar el correo de verificación:', error);
    }
};
