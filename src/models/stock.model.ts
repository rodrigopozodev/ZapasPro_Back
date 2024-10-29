// Backend/src/models/stock.model.ts

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface StockAttributes {
  id?: number;
  fecha: Date;
  producto: string;
  talla: string; 
  cantidad: number;
  movimiento: 'compra' | 'venta' | 'ajuste';
}

class Stock extends Model<StockAttributes> implements StockAttributes {
  public id!: number;
  public fecha!: Date;
  public producto!: string;
  public talla!: string;
  public cantidad!: number;
  public movimiento!: 'compra' | 'venta' | 'ajuste';
}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    talla: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movimiento: {
      type: DataTypes.ENUM('compra', 'venta', 'ajuste'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Stock',
    tableName: 'stock',
    timestamps: false,
  }
);

export default Stock;
