import express from 'express';
import StockController from '../controllers/stock.controller';

const router = express.Router();

// Definir las rutas para la API de stock
router.get('/', StockController.getAll); // Obtener todos los stocks
router.post('/', StockController.create); // Crear un nuevo stock
router.put('/:id', StockController.update); // Actualizar un stock por ID
router.delete('/:id', StockController.delete); // Eliminar un stock por ID

export default router;
