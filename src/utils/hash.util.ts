import bcrypt from 'bcryptjs'; // Importa la biblioteca bcryptjs

// Función para hashear una contraseña
export const hashPassword = async (password: string) => {
  // Hash de la contraseña con un costo de 10
  return await bcrypt.hash(password, 10);
};

// Función para comparar una contraseña con su hash
export const comparePassword = async (password: string, hash: string) => {
  // Compara la contraseña proporcionada con el hash almacenado
  return await bcrypt.compare(password, hash);
};
