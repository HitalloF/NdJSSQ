'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {

     return queryInterface.createTable('Clientes', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
   
  },

   down (queryInterface, Sequelize) {

     return queryInterface.dropTable('Clientes');
  
  }
};