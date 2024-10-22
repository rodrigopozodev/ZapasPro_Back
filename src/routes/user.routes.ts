import { Router } from 'express'; // Importa el enrutador de Express
import { createUser, loginUser, getUsers } from '../controllers/user.controller'; // Importa los controladores de usuario

const router = Router(); // Crea una nueva instancia del enrutador

// Ruta para crear un nuevo usuario
router.post('/', createUser); // Llama al controlador createUser al recibir una solicitud POST en '/'

// Ruta para obtener todos los usuarios
router.get('/', getUsers); // Llama al controlador getUsers al recibir una solicitud GET en '/'

// Ruta para iniciar sesión
router.post('/login', loginUser); // Llama al controlador loginUser al recibir una solicitud POST en '/login'

export default router; // Exporta el enrutador para su uso en otras partes de la aplicación
