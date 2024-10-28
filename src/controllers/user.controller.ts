import { Request, Response } from 'express';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';

const handleError = (res: Response, error: any, message: string) => {
  console.error(message, error);
  res.status(500).json({
    success: false,
    message,
    error: error.message || 'Error desconocido',
  });
};

// Controlador para crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;

  if (!['admin', 'client'].includes(role)) {
    return res.status(400).json({
      success: false,
      message: 'El rol debe ser "admin" o "client".'
    });
  }

  try {
    const existingUser = await User.findOne({ where: { email } }); // Verifica si el usuario ya existe
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'El correo ya está registrado'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.status(201).json({
      success: true,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      }
    });
  } catch (error) {
    handleError(res, error, 'Error al crear el usuario');
  }
};

// Controlador para iniciar sesión
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
    }

    // Retorna la información del usuario en lugar de un token
    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    handleError(res, error, 'Error al iniciar sesión');
  }
};

// Controlador para obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json({ success: true, users });
  } catch (error) {
    handleError(res, error, 'Error al obtener usuarios');
  }
};

// Controlador para obtener un único usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }
    res.json({ success: true, user });
  } catch (error) {
    handleError(res, error, 'Error al obtener el usuario');
  }
};

// Controlador para actualizar un usuario por ID
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, email, role } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }

    user.username = username;
    user.email = email;
    user.role = role;

    await user.save();
    res.json({ success: true, user });
  } catch (error) {
    handleError(res, error, 'Error al actualizar el usuario');
  }
};

// Controlador para eliminar un usuario
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado',
      });
    }

    await user.destroy();
    res.json({
      success: true,
      message: 'Usuario eliminado correctamente',
    });
  } catch (error) {
    handleError(res, error, 'Error al eliminar el usuario');
  }
};
