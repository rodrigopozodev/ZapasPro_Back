import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import stockRoutes from './routes/stock.routes';

import { sequelize } from './config/database';
import { insertInitialData } from './utils/seedData';

dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
    origin: [
        'http://localhost:4200', // Desarrollo local
        'https://tu-sitio-en-netlify.netlify.app' // URL de Netlify
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Archivos estáticos (opcional en producción)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la API
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/stock', stockRoutes);

// Sincronización de la base de datos
sequelize.sync({})
  .then(async () => {
    console.log('Base de datos sincronizada');
    await insertInitialData();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });
