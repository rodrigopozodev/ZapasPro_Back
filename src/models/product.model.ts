import { DataTypes, Model } from 'sequelize'; // Importamos DataTypes y Model de Sequelize
import { sequelize } from '../config/database'; // Importamos la instancia de sequelize

// Define la interfaz para las propiedades del producto
export interface ProductAttributes {
  id?: number; // ID opcional del producto
  name: string; // Nombre del producto
  price: number; // Precio del producto
  description: string; // Descripción del producto
  image: string; // URL de la imagen del producto
  createdAt?: Date; // Fecha de creación opcional (se genera automáticamente)
  updatedAt?: Date; // Fecha de actualización opcional (se genera automáticamente)
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
      type: DataTypes.INTEGER.UNSIGNED, // Tipo de dato para ID (entero sin signo)
      autoIncrement: true, // Autoincrementable
      primaryKey: true, // Clave primaria
    },
    name: {
      type: new DataTypes.STRING(128), // Tipo de dato para el nombre (cadena de hasta 128 caracteres)
      allowNull: false, // Este campo no puede ser nulo
    },
    price: {
      type: DataTypes.FLOAT, // Tipo de dato para el precio (número flotante)
      allowNull: false, // Este campo no puede ser nulo
    },
    description: {
      type: new DataTypes.STRING(256), // Tipo de dato para la descripción (cadena de hasta 256 caracteres)
      allowNull: false, // Este campo no puede ser nulo
    },
    image: {
      type: new DataTypes.STRING(256), // Tipo de dato para la imagen (cadena de hasta 256 caracteres)
      allowNull: false, // Este campo no puede ser nulo
    },
  },
  {
    tableName: 'products', // Nombre de la tabla en la base de datos
    sequelize, // Instancia de sequelize para conectar con la base de datos
  }
);
