// Importa Sequelize, un ORM que facilita la interacción con bases de datos.
import { Sequelize } from 'sequelize';

// Crear una instancia de Sequelize para manejar la conexión a la base de datos.
// En este caso, estamos utilizando SQLite como base de datos.

// CAMBIO FUTURO: Si se necesita cambiar de SQLite a otro motor de base de datos (MySQL, PostgreSQL, etc.),
// se debe modificar la opción 'dialect' y ajustar la configuración de conexión.
const sequelize = new Sequelize({
  dialect: 'sqlite', // Especifica que estamos usando SQLite como base de datos.

  // Ruta al archivo de base de datos SQLite.
  // CAMBIO FUTURO: Modificar esta ruta si se cambia la ubicación del archivo de la base de datos
  // o si se migra la base de datos a otro lugar.
  storage: './src/database/zapaspro.sqlite', // La base de datos se almacena en la carpeta 'src'
});

// Exportamos la instancia de Sequelize para usarla en otras partes del proyecto.
export { sequelize };
