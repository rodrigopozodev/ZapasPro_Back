import { Product } from '../models/product.model'; // Importa el modelo de producto

// Servicio para crear un nuevo producto
export const createProductService = async (
  name: string, 
  price: number, 
  description: string, 
  imageUrl: string, 
  stock: number, 
  sizes: string[], 
  gender: 'unisex' | 'masculino' | 'femenino',
  color: 'negro' | 'azul' | 'marron' | 'verde' | 'gris' | 'naranja' | 'rosa' | 'morado' | 'rojo' | 'blanco' | 'amarillo' | 'multicolor', 
  marca: 'Nike' | 'Adidas' | 'Puma' | 'Reebok' | 'New Balance' | 'Converse' 
) => {
  return Product.create({ 
    name, 
    price, 
    description, 
    imageUrl, 
    gender, 
    color, 
    marca 
  }); // Crea un nuevo producto en la base de datos
};

// Servicio para obtener todos los productos
export const getProductsService = async () => {
  return Product.findAll(); // Devuelve todos los productos almacenados en la base de datos
};

// Servicio para obtener un producto por su ID
export const getProductByIdService = async (id: number) => {
  return Product.findByPk(id); // Busca el producto por su ID
};

// Servicio para actualizar un producto existente
export const updateProductService = async (
  id: number, 
  name: string, 
  price: number, 
  description: string, 
  imageUrl: string, 
  stock?: number, 
  sizes?: string[], 
  gender?: 'unisex' | 'masculino' | 'femenino', 
  color?: 'negro' | 'azul' | 'marron' | 'verde' | 'gris' | 'naranja' | 'rosa' | 'morado' | 'rojo' | 'blanco' | 'amarillo' | 'multicolor', 
  marca?: 'Nike' | 'Adidas' | 'Puma' | 'Reebok' | 'New Balance' | 'Converse' 
) => {
  return Product.update(
    { 
      name, 
      price, 
      description, 
      imageUrl, 
      gender, 
      color, 
      marca 
    }, 
    { where: { id } }
  ); // Actualiza el producto con el ID especificado
};

// Servicio para eliminar un producto por su ID
export const deleteProductService = async (id: number) => {
  return Product.destroy({ where: { id } }); // Elimina el producto correspondiente al ID proporcionado
};
