import express from 'express';
import { registerUser, loginUser, getAllUsers } from '../services/auth.service';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers); // Nueva ruta para obtener todos los usuarios

export default router;
