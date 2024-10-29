import { Request, Response } from 'express';
import Stock from '../models/stock.model'; // Asegúrate de que la ruta del modelo sea correcta

// Controlador para crear una nueva entrada de stock
export const createStock = async (req: Request, res: Response) => {
    const { fecha, producto, talla, cantidad, movimiento } = req.body;

    try {
        const newStock = await Stock.create({
            fecha,
            producto,
            talla,
            cantidad,
            movimiento
        });

        res.status(201).json({
            success: true,
            stock: newStock
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Error al crear la entrada de stock',
            error: error.message || 'Error desconocido'
        });
    }
};

// Controlador para obtener todas las entradas de stock
export const getStock = async (req: Request, res: Response) => {
    try {
        const stocks = await Stock.findAll();
        res.json({
            success: true,
            stocks
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener las entradas de stock',
            error: error.message || 'Error desconocido'
        });
    }
};

// Controlador para actualizar una entrada de stock por ID
export const updateStock = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { fecha, producto, talla, cantidad, movimiento } = req.body;

    try {
        const [updated] = await Stock.update(
            { fecha, producto, talla, cantidad, movimiento },
            { where: { id } }
        );

        if (!updated) {
            return res.status(404).json({ success: false, message: 'Entrada de stock no encontrada' });
        }

        const updatedStock = await Stock.findByPk(id);

        res.json({
            success: true,
            stock: updatedStock
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar la entrada de stock',
            error: error.message || 'Error desconocido'
        });
    }
};

// Controlador para eliminar una entrada de stock por ID
export const deleteStock = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const stock = await Stock.findByPk(id);

        if (!stock) {
            return res.status(404).json({ success: false, message: 'Entrada de stock no encontrada' });
        }

        await stock.destroy();

        res.json({
            success: true,
            message: 'Entrada de stock eliminada con éxito'
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la entrada de stock',
            error: error.message || 'Error desconocido'
        });
    }
};
