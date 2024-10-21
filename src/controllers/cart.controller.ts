import { Request, Response } from 'express';
import Cart from '../models/cart.model';

export const addToCart = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;

  try {
    const cartItem = await Cart.create({ userId, productId, quantity });
    return res.status(201).json(cartItem);
  } catch (error) {
    return res.status(500).json({ message: 'Error adding to cart', error });
  }
};

export const getCart = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const cartItems = await Cart.findAll({ where: { userId } });
    return res.json(cartItems);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching cart', error });
  }
};

export const updateCartItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    await Cart.update({ quantity }, { where: { id } });
    return res.status(200).json({ message: 'Cart item updated' });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating cart item', error });
  }
};

export const deleteCartItem = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Cart.destroy({ where: { id } });
    return res.status(200).json({ message: 'Cart item deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting cart item', error });
  }
};
