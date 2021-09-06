const Sequelize = require('sequelize')

const instanceModel = (Model, databaseInstance) => {
    const model = Model(databaseInstance, Sequelize.DataTypes); 
    return model
}

module.exports = instanceModel