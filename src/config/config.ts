// Archivo de configuración principal para el proyecto ZapasPro
// Contiene las configuraciones clave como el puerto del servidor, la clave JWT y la ubicación de la base de datos.

// Exporta la configuración predeterminada
export default {
  // Puerto en el que se ejecuta la aplicación. 
  // Si se necesita cambiar el puerto, modificar la variable de entorno PORT o este valor por defecto.
  // CAMBIO FUTURO: Ajustar el puerto si el servidor se despliega en otro entorno.
  port: process.env.PORT || 3000,

  // Clave secreta para JWT (autenticación basada en tokens). 
  // Esta clave debe ser única y segura en producción. Usar una variable de entorno para mayor seguridad.
  // CAMBIO FUTURO: Cambiar esta clave si se necesita rotar las claves de seguridad o aumentar la complejidad.
  jwtSecret: process.env.JWT_SECRET || 'secretKey',

  // Ruta al archivo de la base de datos SQLite. 
  // Si se cambia la ubicación de la base de datos, actualizar esta ruta.
  // CAMBIO FUTURO: Ajustar si se migra la base de datos a otro sistema o se cambia la estructura de carpetas.
  dbFile: './database/zapaspro.sqlite', // Archivo de base de datos SQLite
};
