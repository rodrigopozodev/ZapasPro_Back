// Importa Sequelize, un ORM que facilita la interacción con bases de datos.
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite', // Especifica que estamos usando SQLite como base de datos.

  storage: './src/database/zapaspro.sqlite', // La base de datos se almacena en la carpeta 'src'
});

// Exportamos la instancia de Sequelize para usarla en otras partes del proyecto.
export { sequelize };
