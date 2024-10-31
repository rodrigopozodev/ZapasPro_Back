import { Request, Response } from 'express';
import Stock from '../models/stock.model';

class StockController {
    // Obtener todos los stocks
    static async getAll(req: Request, res: Response) {
        try {
            const stocks = await Stock.findAll();
            return res.json(stocks);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Error desconocido al obtener stocks' });
        }
    }

    // Crear un nuevo stock
    static async create(req: Request, res: Response) {
        try {
            const newStock = await Stock.create(req.body);
            return res.status(201).json(newStock);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(400).json({ error: 'Error desconocido al crear stock' });
        }
    }

    // Actualizar un stock
    static async update(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const [updated] = await Stock.update(req.body, {
                where: { id: id },
            });
            if (updated) {
                const updatedStock = await Stock.findOne({ where: { id: id } });
                return res.status(200).json(updatedStock);
            }
            throw new Error('Stock no encontrado');
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(400).json({ error: 'Error desconocido al actualizar stock' });
        }
    }

    // Eliminar un stock
    static async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deleted = await Stock.destroy({
                where: { id: id },
            });
            if (deleted) {
                return res.status(204).send();
            }
            throw new Error('Stock no encontrado');
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(400).json({ error: 'Error desconocido al eliminar stock' });
        }
    }
}

export default StockController;
