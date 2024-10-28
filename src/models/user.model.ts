import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database'; // Asegúrate de que la importación es correcta

// Definición de los atributos del modelo de Usuario
interface UserAttributes {
  id: number;
  username: string;
  email: string; // Añadido el campo de correo electrónico
  password: string;
  role: 'admin' | 'client'; // Definición del tipo para el campo role
  createdAt?: Date;
  updatedAt?: Date;
  birthDay?: number | null; // Nueva propiedad
  surname?: string; // Nueva propiedad
  phoneNumber?: string; // Nueva propiedad
  birthMonth?: number; // Nueva propiedad
  birthYear?: number; // Nueva propiedad
  currentPassword?: string; // Nueva propiedad
  shoppingPreference?: string; // Nueva propiedad
}

// Definición de los atributos opcionales para la creación de un nuevo usuario
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

// Definición del modelo de Usuario
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string; // Añadido el campo de correo electrónico
  public password!: string;
  public role!: 'admin' | 'client';
  public createdAt!: Date;
  public updatedAt!: Date;
  public birthDay?: number | null; // Nueva propiedad
  public surname?: string; // Nueva propiedad
  public phoneNumber?: string; // Nueva propiedad
  public birthMonth?: number; // Nueva propiedad
  public birthYear?: number; // Nueva propiedad
  public currentPassword?: string; // Nueva propiedad
  public shoppingPreference?: string; // Nueva propiedad
}

// Inicialización del modelo
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // El correo electrónico debe ser único
      validate: {
        isEmail: true, // Validación para asegurarse de que sea un correo electrónico válido
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'client'), // Solo se permiten los roles especificados
      allowNull: false,
    },
    birthDay: {
      type: DataTypes.INTEGER, // Asegúrate de que el tipo se ajuste a tus necesidades
      allowNull: true, // Puede ser nulo
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    birthMonth: {
      type: DataTypes.INTEGER, // Asegúrate de que el tipo se ajuste a tus necesidades
      allowNull: true, // Puede ser nulo
    },
    birthYear: {
      type: DataTypes.INTEGER, // Asegúrate de que el tipo se ajuste a tus necesidades
      allowNull: true, // Puede ser nulo
    },
    currentPassword: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    shoppingPreference: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, // La instancia de Sequelize
    tableName: 'users', // Nombre de la tabla en la base de datos
    timestamps: true, // Para que Sequelize maneje createdAt y updatedAt automáticamente
    hooks: {
      beforeCreate: (user: User) => {
        user.createdAt = new Date(); // Asegúrate de que createdAt se establece correctamente
      },
      beforeUpdate: (user: User) => {
        user.updatedAt = new Date(); // Actualiza updatedAt antes de modificar
      },
    },
  }
);
