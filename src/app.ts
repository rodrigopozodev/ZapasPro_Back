import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/product.routes';
import cartRoutes from './routes/cart.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const app = express();

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());
app.use(bodyParser.json()); // No es estrictamente necesario usar body-parser, ya que express.json() ya lo maneja

// Rutas de la API
app.use('/api/auth', authRoutes); // Ruta para autenticación
app.use('/api/products', productRoutes); // Ruta para productos
app.use('/api/cart', cartRoutes); // Ruta para el carrito
app.use('/api/users', userRoutes); // Ruta para usuarios

export default app;
