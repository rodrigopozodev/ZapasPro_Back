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
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift negro 1 .png', gender: 'unisex', color: 'negro', marca: 'Nike' }, // Producto 2
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift negro.png', gender: 'unisex', color: 'negro', marca: 'Nike' }, // Producto 3
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift marron.png', gender: 'unisex', color: 'marron', marca: 'Nike' }, // Producto 4
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift gris.png', gender: 'unisex', color: 'gris', marca: 'Nike' }, // Producto 5
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift gris 1 .png', gender: 'unisex', color: 'gris', marca: 'Nike' }, // Producto 6
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift blanco 1 .png', gender: 'unisex', color: 'blanco', marca: 'Nike' }, // Producto 7
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift blanco.png', gender: 'unisex', color: 'blanco', marca: 'Nike' }, // Producto 8
      { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift azul.png', gender: 'unisex', color: 'azul', marca: 'Nike' }, // Producto 9
    
      //Nike Air Force 1 07 WB
      { name: 'Nike Air Force 1 07 WB', price: 119.99, description: 'Cómodas, duraderas y atemporales: las AF1 son las número 1 de la afición por una razón. Esta versión tiene detalles inspirados en la ropa de trabajo, como cordones redondos y ojales hexagonales, para añadir un toque de estilo robusto, perfecto tanto en la cancha como para el día a día.', imageUrl: '/img/Nike Air Force 1 07 WB.png', gender: 'masculino', color: 'marron', marca: 'Nike' }, // Producto 10

      //Nike Air Force 1 07 LV8
      { name: 'Nike Air Force 1 07 LV8', price: 119.99, description: 'Cómodas, duraderas y atemporales: son las número 1 por una razón. El diseño clásico de los 80 se combina con detalles impecables para conseguir un estilo perfecto tanto en la cancha como fuera de ella. La plataforma sutil ofrece la cantidad justa de altura.', imageUrl: '/img/Nike Air Force 1 07 LV8 verde.jpg', gender: 'masculino', color: 'verde', marca: 'Nike' }, // Producto 11
      { name: 'Nike Air Force 1 07 LV8', price: 119.99, description: 'Cómodas, duraderas y atemporales: son las número 1 por una razón. El diseño clásico de los 80 se combina con detalles impecables para conseguir un estilo perfecto tanto en la cancha como fuera de ella. La plataforma sutil ofrece la cantidad justa de altura.', imageUrl: '/img/Nike Air Force 1 07 LV8 negro.png', gender: 'masculino', color: 'negro', marca: 'Nike' }, // Producto 12
      { name: 'Nike Air Force 1 07 LV8', price: 129.99, description: 'Cómodas, duraderas y atemporales: son las número 1 por una razón. El diseño clásico de los 80 se combina con detalles impecables para conseguir un estilo perfecto tanto en la cancha como fuera de ella. La plataforma sutil ofrece la cantidad justa de altura.', imageUrl: '/img/Nike Air Force 1 07 LV8 blanco.png', gender: 'masculino', color: 'blanco', marca: 'Nike' }, // Producto 13
      { name: 'Nike Air Force 1 07 LV8', price: 129.99, description: 'Cómodas, duraderas y atemporales: son las número 1 por una razón. El diseño clásico de los 80 se combina con detalles impecables para conseguir un estilo perfecto tanto en la cancha como fuera de ella. La plataforma sutil ofrece la cantidad justa de altura.', imageUrl: '/img/Nike Air Force 1 07 LV8 blanco 1 .png', gender: 'masculino', color: 'blanco', marca: 'Nike' }, // Producto 14

      //Nike Air Force 1 07 
      { name: 'Nike Air Force 1 07', price: 119.99, description: 'El fulgor sigue vivo en las Nike Air Force 1 07, un modelo original de baloncesto que introduce un nuevo giro a sus ya característicos revestimientos con costuras duraderas, sus acabados impecables y la cantidad perfecta de reflectante.', imageUrl: '/img/Nike Air Force 1 07 negro.png', gender: 'masculino', color: 'negro', marca: 'Nike' }, // Producto 15
      { name: 'Nike Air Force 1 07', price: 119.99, description: 'El fulgor sigue vivo en las Nike Air Force 1 07, un modelo original de baloncesto que introduce un nuevo giro a sus ya característicos revestimientos con costuras duraderas, sus acabados impecables y la cantidad perfecta de reflectante.', imageUrl: '/img/Nike Air Force 1 07 negro 1 .png', gender: 'masculino', color: 'negro', marca: 'Nike' }, // Producto 16
      { name: 'Nike Air Force 1 07', price: 119.99, description: 'El fulgor sigue vivo en las Nike Air Force 1 07, un modelo original de baloncesto que introduce un nuevo giro a sus ya característicos revestimientos con costuras duraderas, sus acabados impecables y la cantidad perfecta de reflectante.', imageUrl: '/img/Nike Air Force 1 07 blanco.png', gender: 'masculino', color: 'blanco', marca: 'Nike' }, // Producto 17
      { name: 'Nike Air Force 1 07', price: 119.99, description: 'El fulgor sigue vivo en las Nike Air Force 1 07, un modelo original de baloncesto que introduce un nuevo giro a sus ya característicos revestimientos con costuras duraderas, sus acabados impecables y la cantidad perfecta de reflectante.', imageUrl: '/img/Nike Air Force 1 07 blanco 1 .png', gender: 'masculino', color: 'blanco', marca: 'Nike' }, // Producto 18

      //Nike Dunk Low Retro SE Leather/Suede
      { name: 'Nike Dunk Low Retro SE Leather-Suede', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro SE Leather-Suede gris.png', gender: 'masculino', color: 'gris', marca: 'Nike' }, // Producto 19
      { name: 'Nike Dunk Low Retro SE Leather-Suede', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro SE Leather-Suede negro.png', gender: 'masculino', color: 'negro', marca: 'Nike' }, // Producto 20

      //Nike Dunk Low
      { name: 'Nike Dunk Low', price: 129.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low.png', gender: 'masculino', color: 'gris', marca: 'Nike' }, // Producto 21

      //Nike Dunk Low Retro
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro negro.png', gender: 'masculino', color: 'negro', marca: 'Nike' }, // Producto 22
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro gris.png', gender: 'masculino', color: 'gris', marca: 'Nike' }, // Producto 23
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro azul.png', gender: 'masculino', color: 'azul', marca: 'Nike' }, // Producto 24
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro verde.png', gender: 'masculino', color: 'verde', marca: 'Nike' }, // Producto 25
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro rosa.png', gender: 'masculino', color: 'rosa', marca: 'Nike' }, // Producto 26
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro azul 1 .png', gender: 'masculino', color: 'azul', marca: 'Nike' }, // Producto 27
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro azul 2 .png', gender: 'masculino', color: 'azul', marca: 'Nike' }, // Producto 28
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro azul 3 .png', gender: 'masculino', color: 'azul', marca: 'Nike' }, // Producto 29
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro multicolor.jpg', gender: 'masculino', color: 'multicolor', marca: 'Nike' }, // Producto 30
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro rojo.png', gender: 'masculino', color: 'rojo', marca: 'Nike' }, // Producto 31
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro verde 1 .png', gender: 'masculino', color: 'verde', marca: 'Nike' }, // Producto 32
      { name: 'Nike Dunk Low Retro', price: 119.99, description: 'Siempre se puede contar con un clásico. Este diseño estilo Color Block combina piel y ante con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike Dunk Low Retro morado.png', gender: 'masculino', color: 'morado', marca: 'Nike' }, // Producto 33

      //PUMA x ONE PIECE Suede Luffy Sombrero de paja
      { name: 'PUMA x ONE PIECE Suede Luffy Sombrero de paja', price: 100, description: 'PUMA x One Piece combina los mundos del manga y el deporte, con un estilo relevante para la ropa de calle. Hemos tomado nuestra clásica zapatilla Suede y la hemos engalanado por completo para todos los que son hijos del mar. Camina con un diseño totalmente único que combina los gráficos icónicos de tu manga favorito con el estilo histórico de PUMA. ¿Listo para ir a la caza del tesoro?', imageUrl: '/img/PUMA x ONE PIECE Suede Luffy Sombrero de paja.png', gender: 'unisex', color: 'blanco', marca: 'Puma' }, // Producto 34
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
        for (let talla = 35; talla <= 45; talla++) {
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
