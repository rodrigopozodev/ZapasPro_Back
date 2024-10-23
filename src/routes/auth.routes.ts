import express from 'express';
import { registerUser, loginUser, getAllUsers, verifyEmail } from '../services/auth.service';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para verificar el correo electrónico
router.get('/verify', verifyEmail);

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers);

export default router;
