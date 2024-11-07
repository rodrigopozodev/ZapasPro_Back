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
        { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike Air Max Plus Drift.png', gender: 'unisex', color: 'negro', marca: 'Nike' }, // Producto 1
        { name: 'Nike Dunk Low', price: 129.99, description: 'El icono del baloncesto de los 80, creado para la cancha y adaptado al estilo urbano, vuelve con detalles clásicos y un estilo de baloncesto retro. Los revestimientos de piel sintética de las Nike Dunk canalizan el estilo vintage, y su zona del tobillo de perfil bajo y acolchada permite jugar con comodidad donde quieras.', imageUrl: '/img/Nike Dunk Low.png', gender: 'masculino', color: 'marron', marca: 'Nike' }, // Producto 2
        { name: 'Nike Air Max Plus', price: 189.99, description: 'Muestra tu estilo con la estructura en forma de llamas y disfruta de la frescura que aporta la malla ventilada. Las Nike Air Max Plus te aportan una experiencia Air adaptada con una estabilidad premium y una amortiguación increíble.', imageUrl: '/img/Nike Air Max Plus.png', gender: 'masculino', color: 'negro', marca: 'Nike' }, // Producto 3
        { name: 'Nike Air Max Excee', price: 119.99, description: 'Inspiradas en las Nike Air Max 90, las Nike Air Max Excee rinden homenaje a un clásico con un nuevo enfoque. Las líneas alargadas y las proporciones distorsionadas de la parte superior llevan el look de los 90 que tanto te gusta a un espacio nuevo y moderno.', imageUrl: '/img/Nike Air Max Excee.png', gender: 'masculino', color: 'negro', marca: 'Nike' }, // Producto 4
        { name: 'Nike Air Force 1 Low EVO', price: 139.99, description: 'Cómodas, duraderas y atemporales: son las número 1 por una razón. Los detalles de aberturas revelan un logotipo Swoosh de tejido premium y unidades Air de longitud completa en la suela exterior para mostrar las Air Force 1 de una nueva forma. El diseño clásico de los 80 se combina con detalles llamativos para conseguir un estilo perfecto tanto en la cancha como fuera de ella.', imageUrl: '/img/Nike Air Force 1 Low EVO.png', gender: 'masculino', color: 'blanco', marca: 'Nike' }, // Producto 5
        { name: 'Nike Air Force 1 Sage Low', price: 129.99, description: 'Las Nike Air Force 1 Sage Low llevan el diseño y la altura a nuevas metas y reinterpretan el estilo de baloncesto clásico, por y para las mujeres. La parte superior de piel impecable es fácil de combinar. La zona del tobillo moldeada minimiza las zonas calientes. La mediasuela de plataforma aporta un estilo llamativo y atrevido para dejar muy claro que has venido a tomar las riendas.', imageUrl: '/img/Nike Air Force 1 Sage Low.png', gender: 'femenino', color: 'rosa', marca: 'Nike' }, // Producto 6
        { name: 'Nike Air Max 1', price: 149.99, description: 'Te presentamos al líder de la manada. Camina por las nubes sin que nada te moleste con estas Air Max 1, que combinan un diseño atemporal con una amortiguación cómoda. Con un look trepidante, una bandeleta ondulada y Nike Air, este icono clásico entró en escena en 1987 y sigue siendo el alma de la franquicia en la actualidad.', imageUrl: '/img/Nike Air Max 1.png', gender: 'femenino', color: 'verde', marca: 'Nike' }, // Producto 7
        { name: 'Nike Air Max 90', price: 159.99, description: 'No hay nada tan ligero, tan cómodo y tan demostrado como las Nike Air Max 90 SP, que se mantienen fieles a sus raíces con la icónica suela tipo gofre, los revestimientos cosidos y los clásicos detalles de TPU. Los detalles innovadores aportan un aspecto renovado y la amortiguación Max Air añade comodidad en cada pisada.', imageUrl: '/img/Nike Air Max 90.png', gender: 'femenino', color: 'marron', marca: 'Nike' }, // Producto 8
        { name: 'Nike SB Dunk Low Pro Premium', price: 119.99, description: 'Siempre se puede contar con un clásico. Las Dunk Low Pro combinan materiales premium con un acolchado suave para ofrecer una comodidad revolucionaria en todo momento. Las posibilidades son infinitas. ¿Cómo vas a llevar tus Dunk?', imageUrl: '/img/Nike SB Dunk Low Pro Premium.png', gender: 'femenino', color: 'rosa', marca: 'Nike' }, // Producto 9
        { name: 'Nike Air Max Plus Drift', price: 199.99, description: 'Deja que tu estilo se eleve con las Air Max Plus Drift, una experiencia Tuned Air actualizada que ofrece estabilidad y amortiguación premium. Con una malla ventilada, colores degradados y líneas de diseño onduladas originales, rinde homenaje a su estilo desafiante.', imageUrl: '/img/Nike_Air Max Plus Drift.png', gender: 'unisex', color: 'gris', marca: 'Nike' }, // Producto 10
        { name: 'Adidas Gazelle', price: 110.00, description: 'La Gazelle ha sido un icono de estilo urbano desde los 60 y hoy en día sigue atrayendo todas las miradas. Esta versión actualizada presenta las mismas texturas, materiales y dimensiones del modelo de 1991. Presenta una parte superior de nobuk y el nombre de la zapatilla en un tono plateado.', imageUrl: '/img/Adidas_Gazelle_Negro.png', gender: 'masculino', color: 'negro', marca: 'Adidas' }, // Producto 11
        { name: 'Adidas Handball Spezial', price: 110.00, description: 'La zapatilla favorita de los profesionales del balonmano en 1979 triunfa hoy en las calles gracias a su estilo atemporal. Esta versión presenta una parte superior de nobuk muy suave al tacto. La suela de goma color caramelo conserva la esencia vintage del modelo original.', imageUrl: '/img/Adidas_Handball_Spezial_Azul.png', gender: 'unisex', color: 'azul', marca: 'Adidas' }, // Producto 12
        { name: 'Adidas Handball Spezial', price: 110.00, description: 'La zapatilla favorita de los profesionales del balonmano en 1979 triunfa hoy en las calles gracias a su estilo atemporal. Esta versión presenta una parte superior de nobuk muy suave al tacto. La suela de goma color caramelo conserva la esencia vintage del modelo original.', imageUrl: '/img/Adidas_Handball_Spezial_Naranjas.png', gender: 'unisex', color: 'naranja', marca: 'Adidas' }, // Producto 13
        { name: 'Adidas Handball Spezial', price: 110.00, description: 'La zapatilla favorita de los profesionales del balonmano en 1979 triunfa hoy en las calles gracias a su estilo atemporal. Esta versión presenta una parte superior de nobuk muy suave al tacto. La suela de goma color caramelo conserva la esencia vintage del modelo original.', imageUrl: '/img/Adidas_Handball_Spezial_Turkesa.png', gender: 'unisex', color: 'azul', marca: 'Adidas' }, // Producto 14
        { name: 'Adidas Stan Smith', price: 110.00, description: 'Recorre las calles con un clásico. El tenista Stan Smith conquistó las pistas de todo el mundo en los 70. Cálzate la zapatilla que lleva su nombre y derrocha estilo urbano. Esta versión conserva la parte superior de piel y la silueta minimalista del modelo original de 1971.', imageUrl: '/img/Adidas_Stan_Smith_Blanco.png', gender: 'masculino', color: 'blanco', marca: 'Adidas' }, // Producto 15
        { name: 'Puma Mayze', price: 100, description: 'Este modelo está especialmente diseñado para chicas modernas, entusiastas del estilo urbano y aquellas que les gusta seguir las tendencias, es decir, para quienes quieran destacar por su estilo. Las Mayze toman elementos de diseño del entorno urbano y les infunden un toque adicional de actitud. Frescas y minimalistas, con un elegante exterior de piel, refinadas superposiciones de ante, llamativos contrastes de color y una suela muy gruesa, estas zapatillas marcarán tendencia y atraerán todas las miradas.', imageUrl: '/img/Puma Mayze.png', gender: 'femenino', color: 'blanco', marca: 'Puma' }, // Producto 11
        { name: 'Puma Mayze Luxe', price: 109.95, description: 'Estas zapatillas de inspiración urbana presentan una suela de goma gruesa que les confiere un aspecto atrevido a capas. El exterior integral de piel, los detalles de nobuk, el acabado mate y un llamativo efecto animal grabado en la Formstrip de PUMA.', imageUrl: '/img/Puma Mayze Luxe.png', gender: 'femenino', color: 'marron', marca: 'Puma' }, // Producto 12
        { name: 'Puma Rebound V6 Low', price: 65, description: 'Inspirada en el baloncesto, la Rebound Low vuelve para cambiar el juego. La V6 presenta una caña baja para llevarla a diario dentro y fuera de la pista y una piel suave y granulada en el exterior. La marca PUMA en bloques de color atraerá todas las miradas.', imageUrl: '/img/Puma Rebound.png', gender: 'masculino', color: 'amarillo', marca: 'Puma' }, // Producto 13
        { name: 'Puma 180', price: 110, description: 'Hechas para pequeñas leyendas que juegan duro, estas zapatillas con cordones brindan amortiguación y agarre receptivos para las aventuras en el patio de recreo. Los detalles de primera calidad, como las superposiciones de gamuza y la lengüeta de pana, convierten las escapadas diarias en declaraciones de estilo adecuadas. Diseñado para los campeones del mañana.', imageUrl: '/img/Puma 180.png', gender: 'unisex', color: 'morado', marca: 'Puma' }, // Producto 14
        { name: 'Puma CA Pro Classic', price: 90, description: 'La California original de PUMA ha estado dejando su huella en las calles desde que se lanzó en los años 80. Las zapatillas CA Pro Classic, la nueva incorporación a esta familia del calzado, incorporan todos los elementos clave del diseño emblemático, como las líneas sencillas, pero con el añadido de perforaciones y una entresuela moldeada. De aire tradicional y perfectas para el día de hoy, estas zapatillas inspiradas en la Costa Oeste hacen de lo sencillo algo refinado.', imageUrl: '/img/Puma Ca Pro Classic.png', gender: 'unisex', color: 'marron', marca: 'Puma' } // Producto 15
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
