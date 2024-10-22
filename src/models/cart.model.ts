import { Model, DataTypes } from 'sequelize'; // Importamos Model y DataTypes de Sequelize
import { sequelize } from '../config/database'; // Importamos la instancia de sequelize

// Definimos la clase Cart que extiende de Model
class Cart extends Model {
  public id!: number; // ID del carrito, número entero
  public userId!: number; // ID del usuario asociado al carrito, número entero
  public productId!: number; // ID del producto en el carrito, número entero
  public quantity!: number; // Cantidad de productos en el carrito, número entero
}

// Inicializamos el modelo Cart
// CAMBIO FUTURO: Si decides agregar más atributos al carrito, añade aquí.
Cart.init({
  id: {
    type: DataTypes.INTEGER, // Tipo de dato para ID
    autoIncrement: true, // Autoincrementable
    primaryKey: true, // Clave primaria
  },
  userId: {
    type: DataTypes.INTEGER, // Tipo de dato para el ID del usuario
    allowNull: false, // Este campo no puede ser nulo
  },
  productId: {
    type: DataTypes.INTEGER, // Tipo de dato para el ID del producto
    allowNull: false, // Este campo no puede ser nulo
  },
  quantity: {
    type: DataTypes.INTEGER, // Tipo de dato para la cantidad
    allowNull: false, // Este campo no puede ser nulo
  },
}, {
  sequelize, // Pasamos la instancia de sequelize
  tableName: 'carts', // Nombre de la tabla en la base de datos
});

// Exportamos el modelo Cart
export default Cart;
