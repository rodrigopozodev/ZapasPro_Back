import { User } from '../models/user.model';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

// Define el tipo para el rol
type UserRole = 'client' | 'admin';

// Función para registrar un nuevo usuario
export const registerUser = async (req: Request, res: Response) => {
  const { username, password, role }: { username: string; password: string; role: UserRole } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan datos requeridos' });
  }

  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    password: hashedPassword,
    role: role || 'client', // Asigna el rol que se pase como argumento, por defecto 'client'
  });

  return res.json({ id: newUser.id, username: newUser.username, role: newUser.role });
};

// Función para iniciar sesión
export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan datos requeridos' });
  }

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    return res.json({ success: true, id: user.id, username: user.username, role: user.role }); // Solo devuelve los datos del usuario
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Función para obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll(); // Obtiene todos los usuarios de la base de datos
    res.json(users); // Devuelve los usuarios como respuesta
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener los usuarios', error });
  }
};
