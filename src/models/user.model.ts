import { Model, DataTypes } from 'sequelize'; // Importamos Model y DataTypes de Sequelize
import { sequelize } from '../config/database'; // Importamos la instancia de sequelize
import { UserRole } from './roles'; // Importa el tipo UserRole

// Definimos la clase User que extiende Model
export class User extends Model {
  public id!: number; // ID del usuario
  public username!: string; // Nombre de usuario
  public password!: string; // Contraseña del usuario
  public role!: UserRole; // Usa el tipo UserRole aquí para el rol del usuario
  public createdAt!: Date; // Fecha de creación
  public updatedAt!: Date; // Fecha de actualización
}

// Inicializa el modelo de usuario
User.init(
  {
    id: {
      type: DataTypes.INTEGER, // Tipo de dato para ID (entero)
      autoIncrement: true, // Autoincrementable
      primaryKey: true, // Clave primaria
    },
    username: {
      type: DataTypes.STRING, // Tipo de dato para el nombre de usuario (cadena)
      allowNull: false, // Este campo no puede ser nulo
    },
    password: {
      type: DataTypes.STRING, // Tipo de dato para la contraseña (cadena)
      allowNull: false, // Este campo no puede ser nulo
    },
    role: {
      type: DataTypes.ENUM('admin', 'client'), // Define el tipo de datos como ENUM para roles
      allowNull: false, // Este campo no puede ser nulo
    },
  },
  {
    tableName: 'users', // Nombre de la tabla en la base de datos
    sequelize, // Pasar la instancia de sequelize es requerido
  }
);
