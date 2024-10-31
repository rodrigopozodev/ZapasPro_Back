import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import path from 'path'; // Importa path para manejar rutas de archivos

import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import stockRoutes from './routes/stock.routes';

import { sequelize } from './config/database';
import Product, { ProductAttributes } from './models/product.model';
import { User } from './models/user.model';
import Stock from './models/stock.model';

dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:4200', // Permite solicitudes desde esta URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

app.use(express.json());

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public'))); // Asegúrate de que la ruta sea correcta

// Rutas de la API
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/stock', stockRoutes);

// Sincronizar la base de datos y ejecutar el servidor
sequelize.sync({})
  .then(async () => {
    console.log('Base de datos sincronizada');
    await insertInitialData(); // Inserta datos iniciales en la base de datos

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Función para insertar datos iniciales
const insertInitialData = async () => {
  try {
    const hashedPassword = await bcrypt.hash('1234', 10); // Hashea la contraseña por defecto

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

    // Crear productos iniciales con valores válidos de color y marca
    const products: ProductAttributes[] = [
      { name: 'Air Force 1 \'07 PRM', price: 100, description: 'Zapatillas clásicas y cómodas', imageUrl: '/img/Air Force 1 \'07 PRM.png', gender: 'unisex', color: 'verde', marca: 'Nike' },
      { name: 'Nike AIR FORCE 1', price: 110, description: 'Zapatillas Nike AIR FORCE 1', imageUrl: '/img/Nike-AIR_FORCE_1_07.png', gender: 'unisex', color: 'blanco', marca: 'Nike' },
      { name: 'Nike AIR FORCE 1 Amarilla', price: 120, description: 'Zapatillas Nike AIR FORCE 1 en color amarillo', imageUrl: '/img/Nike-AIR_FORCE_1_07_amarilla.png', gender: 'unisex', color: 'blanco', marca: 'Nike' },
      { name: 'Air Force 1 SP', price: 130, description: 'Zapatillas Air Force 1 SP', imageUrl: '/img/Air Force 1 SP.png', gender: 'unisex', color: 'negro', marca: 'Nike' },
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift.png', gender: 'masculino', color: 'negro', marca: 'Nike' }
    ];

    const createdProducts = await Product.bulkCreate(products);
    console.log('Productos iniciales creados');

    // Crear entradas de stock referenciando el id de los productos
    const stockEntries = [];

    // Crear stock para cada producto, exceptuando los IDs 4 y 5
    for (const product of createdProducts) {
      let stockCount = 1000; // Stock normal

      // Si el ID es 4 o 5, el stock es 500
      if (product.id === 4 || product.id === 5) {
        stockCount = 500;
      }

      // Crear tallas de 37 a 45 para productos
      for (let talla = 37; talla <= 45; talla++) {
        stockEntries.push({
          productoId: product.id,
          talla: talla.toString(),
          cantidad: stockCount,
          movimiento: 'compra' as 'compra',
          fecha: new Date()
        });
      }

      // Si el ID es 4 o 5, crear tallas de 41 a 48
      if (product.id === 4 || product.id === 5) {
        for (let talla = 41; talla <= 48; talla++) {
          stockEntries.push({
            productoId: product.id,
            talla: talla.toString(),
            cantidad: stockCount,
            movimiento: 'compra' as 'compra',
            fecha: new Date()
          });
        }
      }
    }

    await Stock.bulkCreate(stockEntries);
    console.log('Stock inicial creado');
  } catch (error) {
    console.error('Error al insertar datos iniciales:', error);
  }
};

