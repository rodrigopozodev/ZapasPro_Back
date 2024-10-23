import { Request, Response } from 'express'; // Importamos tipos para tipar las solicitudes y respuestas
import bcrypt from 'bcrypt'; // Librería para encriptar y comparar contraseñas
import { User } from '../models/user.model'; // Modelo de usuario de la base de datos

// Controlador para registrar un nuevo usuario
export const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, role } = req.body; // Obtenemos los datos del cuerpo de la solicitud

  try {
    // Encriptar la contraseña usando bcrypt con un salt de 10 rondas
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo usuario con el rol especificado
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      // Solo aceptamos los roles 'admin' o 'client', cualquier otro será 'client' por defecto.
      role: (role === 'admin' || role === 'client') ? role : 'client',
    });

    // Devolver una respuesta de éxito con el ID del nuevo usuario
    return res.status(201).json({ message: 'Usuario creado', userId: newUser.id });
  } catch (error) {
    // Si ocurre un error, devolvemos una respuesta de error genérica
    return res.status(500).json({ message: 'Error al crear usuario', error });
  }
};

// Controlador para iniciar sesión
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body; // Obtenemos las credenciales del cuerpo de la solicitud

  try {
    // Buscar usuario por correo electrónico en la base de datos
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' }); // Si no existe, devolvemos un error

    // Comparar la contraseña ingresada con la contraseña almacenada usando bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Credenciales inválidas' }); // Si no coinciden, devolvemos un error

    // Si las credenciales son correctas, devolvemos el usuario, excluyendo la contraseña
    return res.json({ 
      message: 'Inicio de sesión exitoso', 
      user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role } // Enviamos los datos del usuario sin la contraseña
    });
  } catch (error) {
    // Si ocurre un error, devolvemos una respuesta de error genérica
    return res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};
