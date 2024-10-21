import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user.model';

// Controlador para registrar un nuevo usuario
export const register = async (req: Request, res: Response) => {
  const { username, password, role } = req.body; // Obtenemos el rol del cuerpo de la solicitud

  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo usuario con rol especificado
    const newUser = await User.create({
      username,
      password: hashedPassword,
      role: (role === 'admin' || role === 'client') ? role : 'client', // Asegúrate de que solo se acepten estos roles
    });

    // Devolver respuesta
    return res.status(201).json({ message: 'Usuario creado', userId: newUser.id });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear usuario', error });
  }
};

// Controlador para iniciar sesión
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Buscar usuario por nombre
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Credenciales inválidas' });

    // Devuelve los datos del usuario sin 
    return res.json({ message: 'Inicio de sesión exitoso', user: { id: user.id, username: user.username, role: user.role } });
  } catch (error) {
    return res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};
