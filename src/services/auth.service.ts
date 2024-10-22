import { User } from '../models/user.model'; // Importa el modelo de usuario
import bcrypt from 'bcrypt'; // Importa bcrypt para encriptar contraseñas
import { Request, Response } from 'express'; // Importa Request y Response de Express

// Define el tipo para el rol
type UserRole = 'client' | 'admin'; // Define los roles de usuario permitidos

// Función para registrar un nuevo usuario
export const registerUser = async (req: Request, res: Response) => {
  const { username, password, role }: { username: string; password: string; role: UserRole } = req.body;

  // Verifica que los datos requeridos estén presentes
  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan datos requeridos' }); // Respuesta de error si faltan datos
  }

  // Comprueba si el usuario ya existe
  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    return res.status(400).json({ message: 'El usuario ya existe' }); // Respuesta de error si el usuario ya existe
  }

  // Encripta la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    password: hashedPassword,
    role: role || 'client', // Asigna el rol que se pase como argumento, por defecto 'client'
  });

  // Devuelve información del nuevo usuario
  return res.json({ id: newUser.id, username: newUser.username, role: newUser.role });
};

// Función para iniciar sesión
export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Verifica que los datos requeridos estén presentes
  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan datos requeridos' }); // Respuesta de error si faltan datos
  }

  try {
    // Busca el usuario en la base de datos
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' }); // Respuesta si el usuario no se encuentra
    }

    // Verifica la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' }); // Respuesta si la contraseña es incorrecta
    }

    // Devuelve información del usuario al iniciar sesión
    return res.json({ success: true, id: user.id, username: user.username, role: user.role });
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor', error }); // Respuesta en caso de error en el servidor
  }
};

// Función para obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll(); // Obtiene todos los usuarios de la base de datos
    res.json(users); // Devuelve los usuarios como respuesta
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener los usuarios', error }); // Respuesta en caso de error
  }
};
