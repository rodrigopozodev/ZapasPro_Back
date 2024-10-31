import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface ProductAttributes {
  id?: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  gender: 'masculino' | 'femenino' | 'unisex';
  color: 'negro' | 'azul' | 'marron' | 'verde' | 'gris' | 'naranja' | 'rosa' | 'morado' | 'rojo' | 'blanco' | 'amarillo' | 'multicolor';
  marca: 'Nike' | 'Adidas' | 'Puma' | 'Reebok' | 'New Balance' | 'Converse';
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public imageUrl!: string;
  public gender!: 'masculino' | 'femenino' | 'unisex';
  public color!: 'negro' | 'azul' | 'marron' | 'verde' | 'gris' | 'naranja' | 'rosa' | 'morado' | 'rojo' | 'blanco' | 'amarillo' | 'multicolor';
  public marca!: 'Nike' | 'Adidas' | 'Puma' | 'Reebok' | 'New Balance' | 'Converse';

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
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    imageUrl: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('masculino', 'femenino', 'unisex'),
      allowNull: false,
    },
    color: {
      type: DataTypes.ENUM('negro', 'azul', 'marron', 'verde', 'gris', 'naranja', 'rosa', 'morado', 'rojo', 'blanco', 'amarillo', 'multicolor'),
      allowNull: false,
    },
    marca: {
      type: DataTypes.ENUM('Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance', 'Converse'),
      allowNull: false,
    },
  },
  {
    tableName: 'products',
    sequelize,
    timestamps: true,
  }
);

// Exporta el modelo
export default Product;
