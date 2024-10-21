import Cart from '../models/cart.model';

export const addToCartService = async (userId: number, productId: number, quantity: number) => {
  return Cart.create({ userId, productId, quantity });
};

export const getCartItemsService = async (userId: number) => {
  return Cart.findAll({ where: { userId } });
};

export const updateCartItemService = async (id: number, quantity: number) => {
  return Cart.update({ quantity }, { where: { id } });
};

export const deleteCartItemService = async (id: number) => {
  return Cart.destroy({ where: { id } });
};
