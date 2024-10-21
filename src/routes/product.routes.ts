import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/product.controller';

const router = Router();

// Ruta para crear un nuevo producto
router.post('/', createProduct); 
// Ruta para obtener todos los productos
router.get('/', getProducts); 

export default router;
