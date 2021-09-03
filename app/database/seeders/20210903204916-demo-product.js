'use strict';
const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        uuid: uuidv4(),
        barCode: '82173981212423',
        name: 'iPhone 12 Mini Black 128GB',
        description: 'Con Memoria de 128GB 4 de RAM, Doble Cámara Principal.',
        price: 23590.00,
        stock: 5,
        imageUrl: null,
        discount: 10.0,
        discountType: '%',
        featuredLevel: 1,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        uuid: uuidv4(),
        barCode: '984375982371',
        name: 'MacBook Air Spacial Grey M1 500GB',
        description: 'La laptop más ligera con el procesador más potente de Apple.',
        price: 26780.00,
        stock: 2,
        imageUrl: null,
        discount: 20.0,
        discountType: '%',
        featuredLevel: 3,
        createdAt: new Date,
        updatedAt: new Date,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
