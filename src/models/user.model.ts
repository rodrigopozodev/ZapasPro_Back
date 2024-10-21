import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { UserRole } from './roles'; // Importa el tipo UserRole

export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public role!: UserRole; // Usa el tipo UserRole aquí
  public createdAt!: Date;
  public updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'client'), // Define el tipo de datos como ENUM
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize, // passing the `sequelize` instance is required
  }
);
