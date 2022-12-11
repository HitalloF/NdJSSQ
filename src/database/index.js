const Sequelize = require('sequelize');
const configDB = require('../config/database');
const ClientesModel =  require('../models/ClienteModel')

const connection = new Sequelize(configDB);


ClientesModel.init(connection)






module.exports = connection