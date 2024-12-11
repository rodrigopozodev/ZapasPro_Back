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
      { username: 'Juan', email: 'juanito123@example.com', password: hashedPassword, role: 'admin' },
      { username: 'Pedro', email: 'pedrito@example.com', password: hashedPassword, role: 'admin' },
      { username: 'Laura', email: 'laurita@example.com', password: hashedPassword, role: 'admin' },
      { username: 'Carlos', email: 'supercarlos@example.com', password: hashedPassword, role: 'client' },
      { username: 'Ana', email: 'ana123@example.com', password: hashedPassword, role: 'client' },
      { username: 'Lucia', email: 'lucia89@example.com', password: hashedPassword, role: 'client' },
      { username: 'Miguel', email: 'miguelito@example.com', password: hashedPassword, role: 'client' },
      { username: 'Elena', email: 'elenita@example.com', password: hashedPassword, role: 'client' },
      { username: 'Sofia', email: 'sofia123@example.com', password: hashedPassword, role: 'client' },
      { username: 'Daniel', email: 'danielito@example.com', password: hashedPassword, role: 'client' },
      { username: 'Irene', email: 'irene123@example.com', password: hashedPassword, role: 'client' },
      { username: 'Luis', email: 'luisguitar@example.com', password: hashedPassword, role: 'client' },
      { username: 'Sara', email: 'saraviento@example.com', password: hashedPassword, role: 'client' },
      { username: 'David', email: 'david.mirror@example.com', password: hashedPassword, role: 'client' },
      { username: 'Paula', email: 'paulaalmohada@example.com', password: hashedPassword, role: 'client' },
      { username: 'Oscar', email: 'oscar.silla@example.com', password: hashedPassword, role: 'client' },
      { username: 'Raul', email: 'raulzapato@example.com', password: hashedPassword, role: 'client' },
      { username: 'Victoria', email: 'victoria.bag@example.com', password: hashedPassword, role: 'client' },
      { username: 'Mario', email: 'mario.luna@example.com', password: hashedPassword, role: 'client' },
      { username: 'Julia', email: 'julia.flower@example.com', password: hashedPassword, role: 'client' },
      { username: 'Martina', email: 'martinapeluche@example.com', password: hashedPassword, role: 'client' },
      { username: 'Adrian', email: 'adrianfruta@example.com', password: hashedPassword, role: 'client' },
      { username: 'Esteban', email: 'estebanpiedra@example.com', password: hashedPassword, role: 'client' },
      { username: 'Alba', email: 'alba.telefono2@example.com', password: hashedPassword, role: 'client' },
      { username: 'Javier', email: 'javiercarro@example.com', password: hashedPassword, role: 'client' },
      { username: 'Patricia', email: 'patriciaalmidon@example.com', password: hashedPassword, role: 'client' },
      { username: 'Raquel', email: 'raquelpelota2@example.com', password: hashedPassword, role: 'client' },
      { username: 'Felipe', email: 'feliperaton@example.com', password: hashedPassword, role: 'client' },
    
      // Correos adicionales con roles específicos
      { username: 'Sara', email: 'saraadmin@gmail.com', password: hashedPassword, role: 'admin' },
      { username: 'Sara', email: 'saracliente@gmail.com', password: hashedPassword, role: 'client' },
      { username: 'Irene', email: 'ireneadmin@gmail.com', password: hashedPassword, role: 'admin' },
      { username: 'Irene', email: 'irenecliente@gmail.com', password: hashedPassword, role: 'client' }
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

      //adidas
      { name: 'Adidas Handball Spezial', price: 110, description: 'La zapatilla favorita de los profesionales del balonmano en 1979 triunfa hoy en las calles gracias a su estilo atemporal. Esta versión presenta una parte superior de nobuk muy suave al tacto. La suela de goma color caramelo conserva la esencia vintage del modelo original.', imageUrl: '/img/Adidas Handball Spezial.png', gender: 'unisex', color: 'azul', marca: 'Adidas' }, // Producto 35

      //reebok Reebok Club C 85.png
      { name: 'Reebok Club C 85', price: 100, description: 'Únete al club: las zapatillas Club C 85, el modelo original, rinden homenaje a todo un clásico de la pista de tenis con un diseño elegante. La parte superior beige de nobuk presenta un atractivo minimalista, mientras que la puntera reforzada, las perforaciones y la suela de goma se inspiran en los detalles característicos del estilo.', imageUrl: '/img/Reebok Club C 85.png', gender: 'unisex', color: 'marron', marca: 'Reebok' }, // Producto 36

      //Converse Chuck Taylor All Star.png
      { name: 'Converse Chuck Taylor All Star', price: 75, description: 'Las Chuck Taylor All Star han cambiado desde su creación en 1917. Aun así, a pesar del mundo siempre cambiante de la moda y de décadas de nuevas tendencias, el icono para el día a día sigue vivo. Un diseño simple, una silueta atemporal, un inconfundible parche en el tobillo: un elemento familiar para cada versión de ti, sin importar adonde vayas.', imageUrl: '/img/Converse Chuck Taylor All Star.png', gender: 'unisex', color: 'negro', marca: 'Converse' }, // Producto 37
    ];

    const createdProducts = await Product.bulkCreate(products);
console.log('Productos iniciales creados');

// Crear entradas de stock referenciando el id de los productos
const stockEntries = [];

// Función para generar una cantidad de stock aleatoria entre un mínimo y un máximo
function getRandomStock(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Crear stock para cada producto
for (const product of createdProducts) {
  let baseStockCount = 1000; // Stock base

  if (product.id > 11) {
    baseStockCount += (product.id - 11) * 100; // Aumenta el stock en incrementos de 100
  }

  // Crear tallas de 36 a 45 para todos los productos
  for (let talla = 36; talla <= 45; talla++) {
    const stockCount = getRandomStock(100, 10000); // Genera un stock aleatorio entre 100 y 10000

    stockEntries.push({
      productoId: product.id,
      talla: talla.toString(),
      cantidad: stockCount,
      movimiento: 'compra' as 'compra' | 'venta' | 'ajuste', // Cambio aquí
      fecha: new Date()
    });
  }
}

await Stock.bulkCreate(stockEntries);
console.log('Stock inicial creado');

  } catch (error) {
    console.error('Error al insertar datos iniciales:', error);
  }
};
