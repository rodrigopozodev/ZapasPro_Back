import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

// Define la interfaz para las propiedades del producto
export interface ProductAttributes {
  id?: number;
  name: string;
  price: number;
  description: string;
  image: string;
  createdAt?: Date; // Añadido
  updatedAt?: Date; // Añadido
}

// Extiende la clase Model para crear el modelo de Producto
export class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number; // ID del producto
  public name!: string; // Nombre del producto
  public price!: number; // Precio del producto
  public description!: string; // Descripción del producto
  public image!: string; // URL de la imagen del producto

  // Campos de fecha de creación y actualización
  public readonly createdAt!: Date; // Fecha de creación (se genera automáticamente)
  public readonly updatedAt!: Date; // Fecha de actualización (se genera automáticamente)
}

// Inicializa el modelo con la configuración de la tabla
Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    image: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
  },
  {
    tableName: 'products', // Nombre de la tabla en la base de datos
    sequelize, // Instancia de sequelize para conectar con la base de datos
  }
);
