import { Product } from '../models/product.model'; // Usa import con llaves

export const createProductService = async (
  name: string, 
  price: number, 
  description: string, // Cambiado a description
  image: string // Cambiado a image
) => {
  return Product.create({ name, price, description, image }); // Incluye los campos correctos
};

export const getProductsService = async () => {
  return Product.findAll(); // Obtiene todos los productos
};

export const updateProductService = async (
  id: number, 
  name: string, 
  price: number, 
  description: string, // Cambiado a description
  image: string // Cambiado a image
) => {
  return Product.update({ name, price, description, image }, { where: { id } }); // Incluye los campos correctos
};

export const deleteProductService = async (id: number) => {
  return Product.destroy({ where: { id } }); // Elimina el producto por ID
};
