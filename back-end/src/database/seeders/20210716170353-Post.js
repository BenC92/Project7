'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Posts', [
      {
       userId: '1',
       title: 'Hello World',
       content: 'nulla mollis',
       createdAt: new Date(),
       updatedAt: new Date()
     
   },
   {
    userId: '2',
    title: 'Goodnight World',
    content: 'nulla mollis Better',
    createdAt: new Date(),
    updatedAt: new Date()
   }
 ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Posts', null, {});
  }
};
