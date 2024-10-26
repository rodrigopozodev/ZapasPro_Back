import { User } from '../models/user.model';
import bcrypt from 'bcrypt'; // Importar bcrypt para encriptar contraseñas

// Servicio para manejar operaciones de usuario
class UserService {
  // Método para crear un nuevo usuario
  async createUser(username: string, email: string, password: string, role: 'admin' | 'client') {
    // Validación del rol
    if (!['admin', 'client'].includes(role)) {
      throw new Error('El rol debe ser "admin" o "client".');
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear una nueva instancia del usuario
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();
    return newUser; // Devolver el usuario creado
  }

  // Método para obtener todos los usuarios
  async getUsers() {
    return await User.findAll();
  }

  // Método para obtener un usuario por ID
  async getUserById(id: string) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Usuario no encontrado.');
    }
    return user;
  }

  // Método para actualizar un usuario por ID
  async updateUser(id: string, updates: Partial<{ username: string; email: string; password: string; role: 'admin' | 'client' }>) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Usuario no encontrado.');
    }

    // Actualizar solo los campos que se proporcionan
    if (updates.username) user.username = updates.username;
    if (updates.email) user.email = updates.email;
    if (updates.password) user.password = await bcrypt.hash(updates.password, 10); // Encriptar la nueva contraseña
    if (updates.role) {
      if (!['admin', 'client'].includes(updates.role)) {
        throw new Error('El rol debe ser "admin" o "client".');
      }
      user.role = updates.role;
    }

    await user.save(); // Guardar cambios en la base de datos
    return user; // Devolver el usuario actualizado
  }

  // Método para eliminar un usuario por ID
  async deleteUser(id: string) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Usuario no encontrado.');
    }

    await user.destroy(); // Eliminar el usuario de la base de datos
    return { message: 'Usuario eliminado con éxito.' }; // Mensaje de éxito
  }
}

export default new UserService();
