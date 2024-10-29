import Stock from '../models/stock.model'; // Importa el modelo de stock

// Servicio para crear una nueva entrada de stock
export const createStockService = async (
    fecha: Date, 
    producto: string, 
    talla: string, 
    cantidad: number, 
    movimiento: 'compra' | 'venta' | 'ajuste' // Tipo de movimiento
) => {
    return Stock.create({ fecha, producto, talla, cantidad, movimiento }); // Crea una nueva entrada de stock en la base de datos
};

// Servicio para obtener todas las entradas de stock
export const getStocksService = async () => {
    return Stock.findAll(); // Devuelve todas las entradas de stock almacenadas en la base de datos
};

// Servicio para actualizar una entrada de stock existente
export const updateStockService = async (
    id: number, 
    fecha: Date, 
    producto: string, 
    talla: string, 
    cantidad: number, 
    movimiento: 'compra' | 'venta' | 'ajuste' // Tipo de movimiento
) => {
    return Stock.update(
        { fecha, producto, talla, cantidad, movimiento },
        { where: { id } }
    ); // Actualiza la entrada de stock con el ID especificado
};

// Servicio para eliminar una entrada de stock por su ID
export const deleteStockService = async (id: number) => {
    return Stock.destroy({ where: { id } }); // Elimina la entrada de stock correspondiente al ID proporcionado
};
