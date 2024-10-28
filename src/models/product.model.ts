import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface ProductAttributes {
  id?: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string; // Renombrado a imageUrl
  stock: number;
  sizes: string[]; // Se mantiene como un arreglo de cadenas
  gender: 'masculino' | 'femenino' | 'unisex'; // Definido como ENUM
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public imageUrl!: string; // Renombrado
  public stock!: number;
  public sizes!: string[];
  public gender!: 'masculino' | 'femenino' | 'unisex'; // Definido como ENUM

  // Propiedades de solo lectura
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

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
      type: DataTypes.DECIMAL(10, 2), // Cambiado a DECIMAL
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    imageUrl: { // Renombrado
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    sizes: {
      type: DataTypes.JSON, // Almacena un arreglo de tallas
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('masculino', 'femenino', 'unisex'), // Definido como ENUM
      allowNull: false,
    },
  },
  {
    tableName: 'products',
    sequelize,
    timestamps: true, // Asegúrate de que esto esté habilitado para manejar createdAt y updatedAt automáticamente
  }
);

// Exporta el modelo
export default Product;
