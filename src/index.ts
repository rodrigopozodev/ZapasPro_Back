// Importación de dependencias necesarias para el funcionamiento del servidor
import express from 'express'; // Framework para crear el servidor web
import cors from 'cors'; // Middleware para habilitar CORS (Cross-Origin Resource Sharing)
import dotenv from 'dotenv'; // Carga las variables de entorno desde un archivo .env
import path from 'path'; // Módulo de Node.js para manejar rutas de archivos

// Importación de las rutas definidas en los archivos de rutas específicos
import productRoutes from './routes/product.routes'; // Rutas para manejar productos
import userRoutes from './routes/user.routes'; // Rutas para manejar usuarios
import stockRoutes from './routes/stock.routes'; // Rutas para manejar inventarios

// Importación de la configuración de la base de datos y función para insertar datos iniciales
import { sequelize } from './config/database'; // Objeto Sequelize para gestionar la base de datos
import { insertInitialData } from './utils/seedData'; // Función que inserta datos iniciales en la base de datos

// Configuración del entorno, cargando las variables desde el archivo .env
dotenv.config();

// Crear una instancia de la aplicación Express
const app = express();

// Configuración de CORS para permitir solicitudes de origen cruzado
app.use(cors({
    origin: 'http://localhost:4200', // Permite solicitudes solo desde esta URL (por ejemplo, el frontend en Angular)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos en las solicitudes
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos para las solicitudes
}));

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Servir archivos estáticos desde el directorio 'public' (por ejemplo, imágenes, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'))); // Se aseguran que la ruta sea correcta

// Definición de las rutas de la API, que se manejarán por separado en sus respectivos archivos
app.use('/api/products', productRoutes); // Rutas para manejar productos
app.use('/api/users', userRoutes); // Rutas para manejar usuarios
app.use('/api/stock', stockRoutes); // Rutas para manejar inventario

// Sincronización de la base de datos con Sequelize
sequelize.sync({}) // Sincroniza todos los modelos definidos en Sequelize con la base de datos
  .then(async () => { // Si la sincronización es exitosa
    console.log('Base de datos sincronizada'); // Mensaje indicando que la base de datos fue sincronizada correctamente
    await insertInitialData(); // Inserta datos iniciales en la base de datos (por ejemplo, productos, usuarios, etc.)

    // Configura el servidor para que escuche en el puerto especificado en el archivo .env o en el puerto 3000 por defecto
    app.listen(process.env.PORT || 3000, () => { 
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`); // Mensaje indicando que el servidor está corriendo
    });
  })
  .catch(err => { // Si ocurre un error al sincronizar la base de datos
    console.error('Error al conectar a la base de datos:', err); // Muestra el error de conexión en la consola
  });
