import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface StockAttributes {
    id?: number;
    productoId: number;
    talla: string;
    cantidad: number;
    movimiento: 'compra' | 'venta' | 'ajuste';
    fecha: Date;
}

export class Stock extends Model<StockAttributes> implements StockAttributes {
    public id!: number;
    public productoId!: number;
    public talla!: string;
    public cantidad!: number;
    public movimiento!: 'compra' | 'venta' | 'ajuste';
    public fecha!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Stock.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        productoId: {
            type: DataTypes.INTEGER,
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
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'stocks',
        sequelize,
        timestamps: true,
    }
);

export default Stock;
