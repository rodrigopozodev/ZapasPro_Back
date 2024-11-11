// src/utils/seedData.ts

import bcrypt from 'bcrypt';
import Product, { ProductAttributes } from '../models/product.model';
import { User } from '../models/user.model';
import Stock from '../models/stock.model';

export const insertInitialData = async () => {
  try {
    const hashedPassword = await bcrypt.hash('ZapasPro1234', 10); // Hashea la nueva contraseña

    // Crear usuarios iniciales
    await User.bulkCreate([
        { username: 'Rodrigo', email: 'rodrigo@gmail.com', password: hashedPassword, role: 'admin' },
        { username: 'Juan', email: 'mesa@example.com', password: hashedPassword, role: 'admin' },
        { username: 'Pedro', email: 'pelota@example.com', password: hashedPassword, role: 'admin' },
        { username: 'Laura', email: 'sombrero@example.com', password: hashedPassword, role: 'admin' },
        { username: 'Carlos', email: 'telefono@example.com', password: hashedPassword, role: 'client' },
        { username: 'Ana', email: 'ventilador@example.com', password: hashedPassword, role: 'client' },
        { username: 'Lucia', email: 'libro@example.com', password: hashedPassword, role: 'client' },
        { username: 'Miguel', email: 'pluma@example.com', password: hashedPassword, role: 'client' },
        { username: 'Elena', email: 'camisa@example.com', password: hashedPassword, role: 'client' },
        { username: 'Sofia', email: 'banco@example.com', password: hashedPassword, role: 'client' },
        { username: 'Daniel', email: 'taza@example.com', password: hashedPassword, role: 'client' },
        { username: 'Irene', email: 'pintura@example.com', password: hashedPassword, role: 'client' },
        { username: 'Luis', email: 'guitarra@example.com', password: hashedPassword, role: 'client' },
        { username: 'Sara', email: 'viento@example.com', password: hashedPassword, role: 'client' },
        { username: 'David', email: 'espejo@example.com', password: hashedPassword, role: 'client' },
        { username: 'Paula', email: 'almohada@example.com', password: hashedPassword, role: 'client' },
        { username: 'Oscar', email: 'silla@example.com', password: hashedPassword, role: 'client' },
        { username: 'Raul', email: 'zapato@example.com', password: hashedPassword, role: 'client' },
        { username: 'Victoria', email: 'bolsa@example.com', password: hashedPassword, role: 'client' },
        { username: 'Mario', email: 'luna@example.com', password: hashedPassword, role: 'client' },
        { username: 'Julia', email: 'flor@example.com', password: hashedPassword, role: 'client' },
        { username: 'Martina', email: 'peluche@example.com', password: hashedPassword, role: 'client' },
        { username: 'Adrian', email: 'fruta@example.com', password: hashedPassword, role: 'client' },
        { username: 'Esteban', email: 'piedra@example.com', password: hashedPassword, role: 'client' },
        { username: 'Alba', email: 'telefono2@example.com', password: hashedPassword, role: 'client' },
        { username: 'Javier', email: 'carro@example.com', password: hashedPassword, role: 'client' },
        { username: 'Patricia', email: 'almidon@example.com', password: hashedPassword, role: 'client' },
        { username: 'Raquel', email: 'pelota2@example.com', password: hashedPassword, role: 'client' },
        { username: 'Felipe', email: 'raton@example.com', password: hashedPassword, role: 'client' },
      ]);

    console.log('Usuarios iniciales creados');

     // Crear productos iniciales con valores válidos de color y marca
     const products: ProductAttributes[] = [
      // Nike Air Max Plus Drift
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift rojo.png', gender: 'unisex', color: 'rojo', marca: 'Nike' }, // Producto 1
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift negro(1).png', gender: 'unisex', color: 'negro', marca: 'Nike' }, // Producto 2
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift negro.png', gender: 'unisex', color: 'negro', marca: 'Nike' }, // Producto 3
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift marron.png', gender: 'unisex', color: 'marron', marca: 'Nike' }, // Producto 4
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift gris.png', gender: 'unisex', color: 'gris', marca: 'Nike' }, // Producto 5
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift gris(1).png', gender: 'unisex', color: 'gris', marca: 'Nike' }, // Producto 6
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift blanco(1).png', gender: 'unisex', color: 'blanco', marca: 'Nike' }, // Producto 7
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift blanco.png', gender: 'unisex', color: 'blanco', marca: 'Nike' }, // Producto 8
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift azul.png', gender: 'unisex', color: 'azul', marca: 'Nike' } // Producto 9
    ];

    const createdProducts = await Product.bulkCreate(products);
    console.log('Productos iniciales creados');

    // Crear entradas de stock referenciando el id de los productos
    const stockEntries = [];

    // Crear stock para cada producto
    for (const product of createdProducts) {
      let stockCount = 1000; // Stock normal

      if (product.id > 11) {
        stockCount += (product.id - 11) * 100; // Aumenta el stock en incrementos de 100
      }

      // Crear tallas de 37 a 45 para productos con ID del 1 al 10
      if (product.id >= 1 && product.id <= 10) {
        for (let talla = 37; talla <= 45; talla++) {
          stockEntries.push({
            productoId: product.id,
            talla: talla.toString(),
            cantidad: stockCount,
            movimiento: 'compra' as 'compra',
            fecha: new Date()
          });
        }
      }

      // Crear tallas de 46 a 48 para productos con ID del 11 en adelante
      if (product.id >= 11) {
        for (let talla = 46; talla <= 48; talla++) {
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
