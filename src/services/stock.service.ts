import Stock from '../models/stock.model';

export const getAllStocks = async () => {
  return await Stock.findAll(); // Puedes agregar lógica adicional si es necesario
};

export const createNewStock = async (stockData: any) => {
  return await Stock.create(stockData);
};

// Y más métodos según sea necesario
