import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { UserRole } from './roles'; // Revisa si esta importación es necesaria, de lo contrario, elimínala

export class User extends Model {
    public id!: number;
    public firstName!: string; // Reemplaza username con firstName
    public lastName!: string;
    public email!: string;
    public password!: string;
    public role!: UserRole;
    public createdAt!: Date;
    public updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Asegúrate de que el email sea único
    validate: {
      isEmail: true, // Valida que el formato del email sea correcto
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('client', 'admin'),
    defaultValue: 'client',
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // Inicialmente no verificado
    allowNull: false // Asegura que no pueda ser nulo
},
}, {
  sequelize,
  modelName: 'User',
});

