import { Product } from '../models/product.model'; // Importa el modelo de producto con llaves

// Servicio para crear un nuevo producto
export const createProductService = async (
  name: string, 
  price: number, 
  description: string, // Descripción del producto
  imageUrl: string, // Cambiado de 'image' a 'imageUrl'
  stock: number, // Añadido: stock del producto
  sizes: string[], // Cambiado: tamaño por sizes
  gender: 'unisex' | 'masculino' | 'femenino' // Cambiado: tipo específico para gender
) => {
  return Product.create({ name, price, description, imageUrl, gender }); // Crea un nuevo producto en la base de datos
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
  imageUrl: string, // Cambiado de 'image' a 'imageUrl'
  stock?: number, // Opcional: stock del producto
  sizes?: string[], // Cambiado: talla por sizes
  gender?: 'unisex' | 'masculino' | 'femenino' // Cambiado: tipo específico para gender
) => {
  return Product.update(
    { name, price, description, imageUrl, gender }, 
    { where: { id } }
  ); // Actualiza el producto con el ID especificado
};

// Servicio para eliminar un producto por su ID
export const deleteProductService = async (id: number) => {
  return Product.destroy({ where: { id } }); // Elimina el producto correspondiente al ID proporcionado
};
