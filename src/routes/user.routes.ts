import { Router } from 'express';
import { createUser, loginUser, getUsers } from '../controllers/user.controller';

const router = Router();

router.post('/', createUser); // Ruta para crear un nuevo usuario
router.get('/', getUsers); // Ruta para obtener todos los usuarios
router.post('/login', loginUser); // Ruta para iniciar sesión

export default router;
