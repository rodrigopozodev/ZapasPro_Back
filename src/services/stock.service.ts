import Stock from '../models/stock.model';

export const getAllStocks = async () => {
  return await Stock.findAll(); // Puedes agregar lógica adicional si es necesario
};

export const createNewStock = async (stockData: any) => {
  return await Stock.create(stockData);
};

// Obtener un stock por productoId
export const getStockByProductoId = async (productoId: string) => {
  return await Stock.findOne({ where: { productoId: productoId } });
};

// Y más métodos según sea necesario
