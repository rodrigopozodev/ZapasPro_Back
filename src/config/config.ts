export default {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'secretKey',
  dbFile: './database/zapaspro.sqlite', // Archivo de base de datos SQLite
};
