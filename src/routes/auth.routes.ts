import express from 'express'; // Importa el framework Express
import { registerUser, loginUser, getAllUsers } from '../services/auth.service'; // Importa los controladores de servicio

const router = express.Router(); // Crea una nueva instancia del enrutador de Express

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser); // Llama al controlador registerUser al recibir una solicitud POST en '/register'

// Ruta para iniciar sesión
router.post('/login', loginUser); // Llama al controlador loginUser al recibir una solicitud POST en '/login'

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers); // Llama al controlador getAllUsers al recibir una solicitud GET en '/users'

export default router; // Exporta el enrutador para su uso en otras partes de la aplicación
