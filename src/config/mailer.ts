import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Por ejemplo, smtp.gmail.com para Gmail
    port: Number(process.env.SMTP_PORT) || 587, // Por defecto 587
    secure: false, // true para 465, false para otros puertos
    auth: {
        user: process.env.SMTP_USER, // Tu correo
        pass: process.env.SMTP_PASS, // Tu contraseña o token
    },
});

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const verificationUrl = `${process.env.FRONTEND_URL}/verify?token=${verificationToken}`;

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Verificación de correo electrónico',
        html: `<p>Por favor, verifica tu correo electrónico haciendo clic en el siguiente enlace:</p>
               <a href="${verificationUrl}">Verificar correo</a>`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Correo de verificación enviado a:', email);
};
