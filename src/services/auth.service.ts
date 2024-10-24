import { User } from '../models/user.model'; // Importa el modelo de usuario
import bcrypt from 'bcrypt'; // Importa bcrypt para encriptar contraseñas
import { Request, Response } from 'express'; // Importa Request y Response de Express
import { sendEmail } from './mail.service'; // Importa el servicio de correo
import jwt from 'jsonwebtoken'; // Importa jsonwebtoken para generar tokens
import dotenv from 'dotenv'; // Importa dotenv para cargar variables de entorno

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Define el tipo para el rol
type UserRole = 'client' | 'admin'; // Define los roles de usuario permitidos

// Función para registrar un nuevo usuario
export const registerUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, role } = req.body;

  // Validar campos requeridos
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Validar el rol
  const allowedRoles: UserRole[] = ['client', 'admin'];
  if (role && !allowedRoles.includes(role)) {
    return res.status(400).json({ message: 'Rol no válido' });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || 'client',
    });

    // Puedes enviar un correo de verificación aquí si es necesario

    return res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    return res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Función para iniciar sesión
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Verifica que los datos requeridos estén presentes
  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan datos requeridos' });
  }

  try {
    // Busca el usuario en la base de datos
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verifica la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar un token JWT al iniciar sesión
    const secret = process.env.JWT_SECRET; // Obtener la clave secreta
    if (!secret) {
      return res.status(500).json({ message: 'Se produjo un error en el servidor' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: '1h' });

    // Devuelve información del usuario al iniciar sesión
    return res.json({ success: true, id: user.id, email: user.email, role: user.role, token });
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Función para verificar el correo electrónico
export const verifyEmail = async (req: Request, res: Response) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ message: 'Token no proporcionado' });
  }

  try {
    const secret = process.env.JWT_SECRET; // Obtener la clave secreta
    if (!secret) {
      return res.status(500).json({ message: 'Se produjo un error en el servidor' });
    }

    const { email } = jwt.verify(token as string, secret) as any;

    // Actualiza el usuario para marcarlo como verificado
    await User.update({ verified: true }, { where: { email } });

    res.status(200).json({ message: 'Correo verificado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al verificar el correo', error });
  }
};

// Función para obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener los usuarios', error });
  }
};
