import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/product.routes';
import cartRoutes from './routes/cart.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // Añadido
app.use('/api/cart', cartRoutes); // Añadido
app.use('/api/users', userRoutes);

export default app;
