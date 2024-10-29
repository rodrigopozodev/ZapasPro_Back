import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import stockRoutes from './routes/stock.routes'; // Importar las rutas de stock

import { sequelize } from './config/database';
import Product from './models/product.model'; // Cambiar a importación por defecto
import { User } from './models/user.model'; // Cambiar a importación por defecto
import Stock from './models/stock.model'; // Cambiar a importación por defecto

// Cargar variables de entorno desde .env
dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); // Middleware para analizar JSON

// Rutas de la API
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/stock', stockRoutes); // Añadir rutas de stock

// Sincronizar la base de datos y ejecutar el servidor
sequelize.sync({})
  .then(async () => {
    console.log('Base de datos sincronizada');
    
    // Insertar datos iniciales
    await insertInitialData();

    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Función para insertar datos iniciales
const insertInitialData = async () => {
  try {
    // Crear usuarios iniciales
    const hashedPassword = await bcrypt.hash('1234', 10); // Hashea la contraseña

    await User.bulkCreate([
      { username: 'admin1', email: 'admin1@example.com', password: hashedPassword, role: 'admin' },
      { username: 'admin2', email: 'admin2@example.com', password: hashedPassword, role: 'admin' },
      { username: 'admin3', email: 'admin3@example.com', password: hashedPassword, role: 'admin' },
      { username: 'admin4', email: 'admin4@example.com', password: hashedPassword, role: 'admin' },
      { username: 'cliente1', email: 'cliente1@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente2', email: 'cliente2@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente3', email: 'cliente3@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente4', email: 'cliente4@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente5', email: 'cliente5@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente6', email: 'cliente6@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente7', email: 'cliente7@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente8', email: 'cliente8@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente9', email: 'cliente9@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente10', email: 'cliente10@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente11', email: 'cliente11@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente12', email: 'cliente12@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente13', email: 'cliente13@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente14', email: 'cliente14@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente15', email: 'cliente15@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente16', email: 'cliente16@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente17', email: 'cliente17@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente18', email: 'cliente18@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente19', email: 'cliente19@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente20', email: 'cliente20@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente21', email: 'cliente21@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente22', email: 'cliente22@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente23', email: 'cliente23@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente24', email: 'cliente24@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente25', email: 'cliente25@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente26', email: 'cliente26@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente27', email: 'cliente27@example.com', password: hashedPassword, role: 'client' },
      { username: 'cliente28', email: 'cliente28@example.com', password: hashedPassword, role: 'client' },
    ]);

    console.log('Usuarios iniciales creados');

    // Crear productos iniciales
    const products = [
      { name: 'Air Force 1 \'07 PRM', price: 100, description: 'Zapatillas clásicas y cómodas', imageUrl: '/img/Air Force 1 \'07 PRM.png', gender: 'unisex' as 'unisex' }, // Asegúrate de que sea un tipo específico
      { name: 'Nike AIR FORCE 1', price: 110, description: 'Zapatillas Nike AIR FORCE 1', imageUrl: '/img/Nike-AIR_FORCE_1_07.png', gender: 'unisex' as 'unisex' },
      { name: 'Nike AIR FORCE 1 Amarilla', price: 120, description: 'Zapatillas Nike AIR FORCE 1 en color amarillo', imageUrl: '/img/Nike-AIR_FORCE_1_07_amarilla.png', gender: 'unisex' as 'unisex' },
      { name: 'Air Force 1 SP', price: 130, description: 'Zapatillas Air Force 1 SP', imageUrl: '/img/Air Force 1 SP.png', gender: 'unisex' as 'unisex' },
    ];
    
    // Insertar productos en la base de datos
    await Product.bulkCreate(products);
    console.log('Productos insertados correctamente');

    // Crear stock inicial
    await Stock.bulkCreate([
      { fecha: new Date(), producto: 'Air Force 1 \'07 PRM', talla: '43', cantidad: 10, movimiento: 'compra' },
      { fecha: new Date(), producto: 'Air Force 1 \'07 PRM', talla: '44', cantidad: 15, movimiento: 'compra' },
      { fecha: new Date(), producto: 'Air Force 1 \'07 PRM', talla: '45', cantidad: 8, movimiento: 'compra' }
    ]);

    console.log('Datos iniciales insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos iniciales:', error);
  }
};

// Exportar la aplicación (opcional, en caso de que necesites usarla en pruebas)
export default app;
