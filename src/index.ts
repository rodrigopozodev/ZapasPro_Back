import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import { sequelize } from './config/database';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import productRoutes from './routes/product.routes';
import { Product } from './models/product.model';
import { User } from './models/user.model';
import bcrypt from 'bcrypt'; // Importa bcrypt

// Cargar variables de entorno desde .env
dotenv.config();

const app = express();

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Sincroniza la base de datos y ejecuta el servidor
sequelize.sync({ force: true })  // 'force: true' reinicia la base de datos cada vez (para desarrollo)
  .then(async () => {
    console.log('Base de datos sincronizada');
    
    // Llama a la función para crear datos iniciales
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
      { username: 'admin1', password: hashedPassword, role: 'admin' },
      { username: 'admin2', password: hashedPassword, role: 'admin' },
      { username: 'admin3', password: hashedPassword, role: 'admin' },
      { username: 'admin4', password: hashedPassword, role: 'admin' },
      { username: 'cliente1', password: hashedPassword, role: 'client' },
      { username: 'cliente2', password: hashedPassword, role: 'client' },
      { username: 'cliente3', password: hashedPassword, role: 'client' },
      { username: 'cliente4', password: hashedPassword, role: 'client' },
    ]);

    console.log('Usuarios iniciales creados');

    // Crear productos iniciales
    await Product.bulkCreate([
      { name: 'Air Force 1 \'07 PRM', price: 100, description: 'Zapatillas clásicas y cómodas', image: '/img/Air Force 1 \'07 PRM.png' },
      { name: 'Nike AIR FORCE 1', price: 110, description: 'Zapatillas Nike AIR FORCE 1', image: '/img/Nike-AIR_FORCE_1_07.png' },
      { name: 'Nike AIR FORCE 1 Amarilla', price: 120, description: 'Zapatillas Nike AIR FORCE 1 en color amarillo', image: '/img/Nike-AIR_FORCE_1_07_amarilla.png' },
      { name: 'Air Force 1 SP', price: 130, description: 'Zapatillas Air Force 1 SP', image: '/img/Air Force 1 SP.png' },
    ]);

    console.log('Productos iniciales creados');
    
  } catch (error) {
    console.error('Error al insertar datos iniciales:', error);
  }
};
