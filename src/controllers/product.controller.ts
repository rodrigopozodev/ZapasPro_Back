import { Request, Response } from 'express';
import { Product } from '../models/product.model'; 

// Controlador para crear un nuevo producto
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, imageUrl, stock, sizes, gender } = req.body; 

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl,
      gender,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      product: newProduct
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error al crear el producto',
      error: error.message || 'Error desconocido'
    });
  }
};

// Controlador para obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener productos',
      error: error.message || 'Error desconocido'
    });
  }
};

// Controlador para actualizar un producto por ID
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, description, imageUrl, stock, sizes, gender } = req.body;

  try {
    const [updated] = await Product.update(
      { name, price, description, imageUrl, gender },
      {
        where: { id }
      }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Producto no encontrado' });
    }

    const updatedProduct = await Product.findByPk(id);

    res.json({
      success: true,
      product: updatedProduct
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el producto',
      error: error.message || 'Error desconocido'
    });
  }
};


// Controlador para eliminar un producto por ID
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Producto no encontrado' });
    }

    await product.destroy();

    res.json({
      success: true,
      message: 'Producto eliminado con éxito'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el producto',
      error: error.message || 'Error desconocido'
    });
  }
};
