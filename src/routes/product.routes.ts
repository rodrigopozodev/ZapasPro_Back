import { Router } from 'express'; // Importa el enrutador de Express
import { createProduct, getProducts } from '../controllers/product.controller'; // Importa los controladores de productos

const router = Router(); // Crea una nueva instancia del enrutador

// Ruta para crear un nuevo producto
router.post('/', createProduct); // Llama al controlador createProduct al recibir una solicitud POST en '/'

// Ruta para obtener todos los productos
router.get('/', getProducts); // Llama al controlador getProducts al recibir una solicitud GET en '/'

export default router; // Exporta el enrutador para su uso en otras partes de la aplicación
