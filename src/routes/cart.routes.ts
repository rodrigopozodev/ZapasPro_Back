import { Router } from 'express';
import { addToCart, getCart, updateCartItem, deleteCartItem } from '../controllers/cart.controller';

const router = Router();

router.post('/', addToCart);
router.get('/:userId', getCart);
router.put('/:id', updateCartItem);
router.delete('/:id', deleteCartItem);

export default router;
