import { Request, Response } from 'express'; // Importamos tipos de Express para las solicitudes y respuestas
import { User } from '../models/user.model'; // Importamos el modelo de usuario
import bcrypt from 'bcrypt'; // Importamos bcrypt para la encriptación de contraseñas

// Controlador para crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, role } = req.body; // Obtenemos los datos del cuerpo de la solicitud

  try {
    // Encriptar la contraseña con bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Crear un nuevo usuario en la base de datos
    const newUser = await User.create({ firstName, lastName, email, password: hashedPassword, role });

    // Devolver respuesta exitosa con el nuevo usuario creado
    res.status(201).json({ success: true, user: newUser });
  } catch (error: any) { // Manejo de errores
    res.status(500).json({
      success: false,
      message: 'Error al crear usuario',
      error: error.message || 'Error desconocido',
    });
  }
};

// Controlador para obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    // Buscar todos los usuarios en la base de datos
    const users = await User.findAll();

    // Devolver una respuesta con los usuarios encontrados
    res.json({ success: true, users });
  } catch (error: any) {
    // Manejo de errores
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuarios',
      error: error.message || 'Error desconocido',
    });
  }
};

// Controlador para iniciar sesión
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body; // Obtenemos los datos del cuerpo de la solicitud

  try {
    // Buscar el usuario en la base de datos por correo electrónico
    const user = await User.findOne({ where: { email } });

    if (!user) {
      // Si el usuario no existe, responder con un error
      return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña ingresada
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // Si la contraseña es incorrecta, responder con un error
      return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
    }

    // Devolver los datos del usuario sin la contraseña
    res.json({
      success: true,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    // Manejo de errores
    res.status(500).json({
      success: false,
      message: 'Error al iniciar sesión',
      error: error.message || 'Error desconocido',
    });
  }
};
