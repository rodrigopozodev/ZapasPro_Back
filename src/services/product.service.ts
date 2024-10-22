import { Product } from '../models/product.model'; // Importa el modelo de producto con llaves

// Servicio para crear un nuevo producto
export const createProductService = async (
  name: string, 
  price: number, 
  description: string, // Descripción del producto
  image: string // URL de la imagen del producto
) => {
  return Product.create({ name, price, description, image }); // Crea un nuevo producto en la base de datos
};

// Servicio para obtener todos los productos
export const getProductsService = async () => {
  return Product.findAll(); // Devuelve todos los productos almacenados en la base de datos
};

// Servicio para actualizar un producto existente
export const updateProductService = async (
  id: number, 
  name: string, 
  price: number, 
  description: string, // Descripción del producto
  image: string // URL de la imagen del producto
) => {
  return Product.update({ name, price, description, image }, { where: { id } }); // Actualiza el producto con el ID especificado
};

// Servicio para eliminar un producto por su ID
export const deleteProductService = async (id: number) => {
  return Product.destroy({ where: { id } }); // Elimina el producto correspondiente al ID proporcionado
};
