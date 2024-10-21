import { Request, Response } from 'express';
import { Product } from '../models/product.model'; // Cambia esto a una importación nombrada

// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, image } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      image,
      createdAt: new Date(), // Cambiado a Date
      updatedAt: new Date()   // Cambiado a Date
    });
    
    await newProduct.save(); // Guardar en la base de datos

    res.status(201).json({
      success: true,
      product: newProduct
    });
  } catch (error: any) { // Aquí estamos indicando que "error" puede ser de cualquier tipo
    res.status(500).json({
      success: false,
      message: 'Error al crear el producto',
      error: error.message || 'Error desconocido'
    });
  }
};

// Obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    console.log('Productos encontrados:', products); // Verifica si encuentras productos
    res.json(products);
  } catch (error: any) {
    console.error('Error al obtener productos:', error); // Log adicional
    res.status(500).json({
      success: false,
      message: 'Error al obtener productos',
      error: error.message || 'Error desconocido'
    });
  }
};
