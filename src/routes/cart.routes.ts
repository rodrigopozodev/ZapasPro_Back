import { Router } from 'express'; // Importa el enrutador de Express
import { addToCart, getCart, updateCartItem, deleteCartItem } from '../controllers/cart.controller'; // Importa los controladores del carrito

const router = Router(); // Crea una nueva instancia del enrutador

// Ruta para agregar un producto al carrito
router.post('/', addToCart); // Llama al controlador addToCart al recibir una solicitud POST en '/'

// Ruta para obtener los artículos del carrito de un usuario específico
router.get('/:userId', getCart); // Llama al controlador getCart al recibir una solicitud GET en '/:userId'

// Ruta para actualizar un artículo en el carrito
router.put('/:id', updateCartItem); // Llama al controlador updateCartItem al recibir una solicitud PUT en '/:id'

// Ruta para eliminar un artículo del carrito
router.delete('/:id', deleteCartItem); // Llama al controlador deleteCartItem al recibir una solicitud DELETE en '/:id'

export default router; // Exporta el enrutador para su uso en otras partes de la aplicación
