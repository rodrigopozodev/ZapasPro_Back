import { Request, Response } from 'express';
import { Product } from '../models/product.model'; // Asegúrate de que la importación está correctamente nombrada

// Controlador para crear un nuevo producto
// CAMBIO FUTURO: Si añades más campos (por ejemplo, categorías), actualiza aquí y en el modelo.
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, imageUrl, stock, sizes, gender } = req.body; // Cambiado 'image' a 'imageUrl'

  try {
    // Crear una nueva instancia del producto con los datos proporcionados
    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl, // Cambiado aquí también
      stock, // Añadido: stock del producto
      sizes, // Cambiado: talla por sizes
      gender, // Cambiado: sexo por gender
      createdAt: new Date(), // Añadimos fecha de creación
      updatedAt: new Date()  // Añadimos fecha de actualización
    });

    // Guardar el nuevo producto en la base de datos
    await newProduct.save();

    // Respuesta exitosa con el producto creado
    res.status(201).json({
      success: true,
      product: newProduct
    });
  } catch (error: any) { // Captura de errores y manejo de mensajes
    res.status(500).json({
      success: false,
      message: 'Error al crear el producto',
      error: error.message || 'Error desconocido'
    });
  }
};

// Controlador para obtener todos los productos
// CAMBIO FUTURO: Si necesitas paginación o filtrado por categoría, modifica esta función.
export const getProducts = async (req: Request, res: Response) => {
  try {
    // Buscar todos los productos en la base de datos
    const products = await Product.findAll();

    console.log('Productos encontrados:', products); // Log para verificar la respuesta en consola

    // Responder con los productos encontrados
    res.json(products);
  } catch (error: any) {
    console.error('Error al obtener productos:', error); // Registro de errores en consola para depuración

    // Respuesta de error si no se pueden obtener los productos
    res.status(500).json({
      success: false,
      message: 'Error al obtener productos',
      error: error.message || 'Error desconocido'
    });
  }
};
