import { Sequelize } from 'sequelize';

// Crear una instancia de Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/zapaspro.sqlite', // Cambia la ruta para que esté dentro de 'src'
});

export { sequelize };
