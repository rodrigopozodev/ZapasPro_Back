import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import productRoutes from './routes/product.routes';
import { sequelize } from './config/database';
import { Product } from './models/product.model';
import { User } from './models/user.model';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();

// Configurar CORS para permitir solicitudes desde un origen específico
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:4200', // Permite configurarlo desde .env
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); // Middleware para analizar cuerpos de solicitudes en formato JSON

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Función para insertar datos iniciales
const insertInitialData = async () => {
    try {
        const userCount = await User.count();
        if (userCount === 0) { // Solo inserta si no hay usuarios
            const hashedPassword = await bcrypt.hash('1234', 10);
            await User.bulkCreate([
                { firstName: 'Admin', lastName: 'One', email: 'admin1@example.com', password: hashedPassword, role: 'admin' },
                { firstName: 'Admin', lastName: 'Two', email: 'admin2@example.com', password: hashedPassword, role: 'admin' },
                { firstName: 'Client', lastName: 'One', email: 'client1@example.com', password: hashedPassword, role: 'client' },
                { firstName: 'Client', lastName: 'Two', email: 'client2@example.com', password: hashedPassword, role: 'client' },
            ]);
            console.log('Usuarios iniciales creados');
        }

        const productCount = await Product.count();
        if (productCount === 0) { // Solo inserta si no hay productos
            await Product.bulkCreate([
                { name: 'Air Force 1 \'07 PRM', price: 100, description: 'Zapatillas clásicas y cómodas', image: '/img/Air Force 1 \'07 PRM.png' },
                { name: 'Nike AIR FORCE 1', price: 110, description: 'Zapatillas Nike AIR FORCE 1', image: '/img/Nike-AIR_FORCE_1_07.png' },
                { name: 'Nike AIR FORCE 1 Amarilla', price: 120, description: 'Zapatillas Nike AIR FORCE 1 en color amarillo', image: '/img/Nike-AIR_FORCE_1_07_amarilla.png' },
                { name: 'Air Force 1 SP', price: 130, description: 'Zapatillas Air Force 1 SP', image: '/img/Air Force 1 SP.png' },
            ]);
            console.log('Productos iniciales creados');
        }
    } catch (error) {
        console.error('Error al insertar datos iniciales:', error);
    }
};

// Sincroniza la base de datos y ejecuta el servidor
sequelize.sync()  // Cambiado a 'force: false' o eliminado
    .then(async () => {
        console.log('Base de datos sincronizada');
        await insertInitialData();
        // Escucha en el puerto especificado en .env o en el puerto 3000 por defecto
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });
