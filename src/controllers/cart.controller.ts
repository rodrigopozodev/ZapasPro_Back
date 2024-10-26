import { Request, Response } from 'express'; // Importamos tipos de Express para las solicitudes y respuestas
import Cart from '../models/cart.model'; // Modelo del carrito de compras

// Controlador para agregar un producto al carrito
// CAMBIO FUTURO: Si se agregan validaciones adicionales, como verificar stock o duplicados, esto debe modificarse.
export const addToCart = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body; // Obtenemos datos necesarios del cuerpo de la solicitud

  try {
    // Crear un nuevo ítem en el carrito para el usuario
    const cartItem = await Cart.create({ userId, productId, quantity });

    // Devolver una respuesta con el ítem creado
    return res.status(201).json(cartItem);
  } catch (error) {
    // En caso de error, devolver un mensaje adecuado
    return res.status(500).json({ message: 'Error adding to cart', error });
  }
};

// Controlador para obtener todos los ítems del carrito de un usuario
// CAMBIO FUTURO: Si se agregan más detalles del producto en la respuesta, se debe modificar esta función.
export const getCart = async (req: Request, res: Response) => {
  const { userId } = req.params; // Obtenemos el ID del usuario desde los parámetros de la URL

  try {
    // Buscar todos los ítems del carrito para el usuario
    const cartItems = await Cart.findAll({ where: { userId } });

    // Devolver una respuesta con los ítems del carrito
    return res.json(cartItems);
  } catch (error) {
    // En caso de error, devolver un mensaje adecuado
    return res.status(500).json({ message: 'Error fetching cart', error });
  }
};

// Controlador para actualizar la cantidad de un ítem en el carrito
// CAMBIO FUTURO: Si se añaden más campos que actualizar (como precio o descuento), ajustar aquí.
export const updateCartItem = async (req: Request, res: Response) => {
  const { id } = req.params; // Obtenemos el ID del ítem del carrito desde los parámetros
  const { quantity } = req.body; // Obtenemos la nueva cantidad del cuerpo de la solicitud

  try {
    // Actualizar la cantidad del ítem en el carrito
    await Cart.update({ quantity }, { where: { id } });

    // Devolver una respuesta indicando que la actualización fue exitosa
    return res.status(200).json({ message: 'Cart item updated' });
  } catch (error) {
    // En caso de error, devolver un mensaje adecuado
    return res.status(500).json({ message: 'Error updating cart item', error });
  }
};

// Controlador para eliminar un ítem del carrito
// CAMBIO FUTURO: Si se necesita eliminar ítems en masa o condicionalmente, este método debe modificarse.
export const deleteCartItem = async (req: Request, res: Response) => {
  const { id } = req.params; // Obtenemos el ID del ítem del carrito desde los parámetros

  try {
    // Eliminar el ítem del carrito
    await Cart.destroy({ where: { id } });

    // Devolver una respuesta indicando que la eliminación fue exitosa
    return res.status(200).json({ message: 'Cart item deleted' });
  } catch (error) {
    // En caso de error, devolver un mensaje adecuado
    return res.status(500).json({ message: 'Error deleting cart item', error });
  }
};
