import { Router } from 'express';
import { createUser, loginUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/user.controller';

const router = Router();

router.post('/register', createUser);
router.post('/login', loginUser); // Ruta para iniciar sesión
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
