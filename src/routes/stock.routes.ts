import { Router } from 'express';
import { createStock, getStock, updateStock, deleteStock } from '../controllers/stock.controller';

const router = Router();

// Ruta para crear una nueva entrada de stock
router.post('/', createStock); // Cambiar /stock a /

// Ruta para obtener todas las entradas de stock
router.get('/', getStock);

// Ruta para actualizar una entrada de stock por ID
router.put('/:id', updateStock);

// Ruta para eliminar una entrada de stock por ID
router.delete('/:id', deleteStock);

export default router;
