const { Model, DataTypes} = require('sequelize');

class Clientes extends Model {
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            numero:DataTypes.INTEGER
        },{
            sequelize
        })
    }
}

module.exports = Clientes;