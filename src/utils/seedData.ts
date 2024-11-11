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
        { username: 'Admin2', email: 'admin2@example.com', password: hashedPassword, role: 'admin' }, // Primera letra en mayúscula
        { username: 'Admin3', email: 'admin3@example.com', password: hashedPassword, role: 'admin' }, // Primera letra en mayúscula
        { username: 'Admin4', email: 'admin4@example.com', password: hashedPassword, role: 'admin' }, // Primera letra en mayúscula
        { username: 'Cliente1', email: 'cliente1@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente2', email: 'cliente2@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente3', email: 'cliente3@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente4', email: 'cliente4@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente5', email: 'cliente5@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente6', email: 'cliente6@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente7', email: 'cliente7@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente8', email: 'cliente8@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente9', email: 'cliente9@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente10', email: 'cliente10@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente11', email: 'cliente11@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente12', email: 'cliente12@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente13', email: 'cliente13@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente14', email: 'cliente14@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente15', email: 'cliente15@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente16', email: 'cliente16@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente17', email: 'cliente17@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente18', email: 'cliente18@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente19', email: 'cliente19@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente20', email: 'cliente20@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente21', email: 'cliente21@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente22', email: 'cliente22@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente23', email: 'cliente23@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente24', email: 'cliente24@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente25', email: 'cliente25@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente26', email: 'cliente26@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente27', email: 'cliente27@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
        { username: 'Cliente28', email: 'cliente28@example.com', password: hashedPassword, role: 'client' }, // Primera letra en mayúscula
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
