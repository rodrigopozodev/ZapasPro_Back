import { Request, Response } from 'express';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';

export const createUser = async (req: Request, res: Response) => {
  const { username, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword, role });
    res.status(201).json({ success: true, user: newUser });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error al crear usuario',
      error: error.message || 'Error desconocido',
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json({ success: true, users });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuarios',
      error: error.message || 'Error desconocido',
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
    }

    // Verifica la contraseña
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error al iniciar sesión',
      error: error.message || 'Error desconocido',
    });
  }
};
