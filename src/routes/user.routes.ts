import { Router } from 'express';
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  loginUser,
} from '../controllers/user.controller';

const router = Router();

// Rutas para usuarios
router.post('/', createUser); // Ahora será /api/users
router.get('/', getUsers);      // Ahora será /api/users
router.put('/:id', updateUser); // Ahora será /api/users/:id
router.delete('/:id', deleteUser); // Ahora será /api/users/:id
router.post('/login', loginUser); // Ahora será /api/users/login

export default router;
