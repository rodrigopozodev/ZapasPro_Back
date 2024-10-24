import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user.model';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

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



// Función para registrar un nuevo usuario
export const registerUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, role } = req.body;

  // Validar el rol
  const allowedRoles = ['client', 'admin'];
  if (!allowedRoles.includes(role)) {
      return res.status(400).json({ message: 'Rol no válido' });
  }

  try {
      // Verifica si el correo ya existe
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
          return res.status(400).json({ message: 'Usuario ya existe' });
      }

      // Verificar la complejidad de la contraseña
      if (password.length < 8) {
          return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres.' });
      }

      // Hashea la contraseña antes de guardar
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crea el nuevo usuario
      const newUser = await User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          role,
      });

      // Configuración del correo electrónico
      const mailOptions = {
          from: process.env.MAIL_USER,
          to: email,
          subject: 'Bienvenido a ZapasPro',
          text: 'Gracias por registrarte en ZapasPro. ¡Estamos encantados de tenerte con nosotros!',
      };

      // Enviar el correo electrónico
      await transporter.sendMail(mailOptions);
      console.log('Correo de bienvenida enviado a:', email); // Confirmación del envío

      return res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
      console.error('Error al registrar el usuario:', error);
      return res.status(500).json({ message: 'Error en el servidor', error });
  }
};


// Controlador para iniciar sesión
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Credenciales inválidas' });

    return res.json({ 
      message: 'Inicio de sesión exitoso', 
      user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role }
    });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};
