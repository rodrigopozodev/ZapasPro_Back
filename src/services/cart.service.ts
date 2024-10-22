import Cart from '../models/cart.model'; // Importa el modelo de carrito

// Servicio para añadir un producto al carrito
export const addToCartService = async (userId: number, productId: number, quantity: number) => {
  return Cart.create({ userId, productId, quantity }); // Crea una nueva entrada en el carrito
};

// Servicio para obtener los artículos del carrito de un usuario
export const getCartItemsService = async (userId: number) => {
  return Cart.findAll({ where: { userId } }); // Devuelve todos los artículos del carrito del usuario
};

// Servicio para actualizar la cantidad de un artículo en el carrito
export const updateCartItemService = async (id: number, quantity: number) => {
  return Cart.update({ quantity }, { where: { id } }); // Actualiza la cantidad del artículo en el carrito
};

// Servicio para eliminar un artículo del carrito
export const deleteCartItemService = async (id: number) => {
  return Cart.destroy({ where: { id } }); // Elimina el artículo del carrito
};
