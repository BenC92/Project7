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
     await queryInterface.bulkInsert('Comments', [
      {
       userId: '1',
       postId: 2,
       comment: 'nulla mollis',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        userId: '2',
        postId: 1,
        comment: 'nulla mollis Better',
        createdAt: new Date(),
        updatedAt: new 
        Date()
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
     await queryInterface.bulkDelete('Comments', null, {});
  }
};
