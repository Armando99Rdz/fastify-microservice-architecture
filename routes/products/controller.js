const config = require('../../app/config/app')
const Sequelize = require('sequelize')
const dbConnection = require('../../app/lib/dbConnection')
const db = dbConnection(require('fastify')({ logger: true }))
const Product = require('../../app/models/product')

const model = Product(db, Sequelize.DataTypes); // Get model instance

/**
 * Get all products
 * 
 * @param {object} req 
 * @param {object} reply 
 */
exports.allController = async (req, reply) => {
    
    const products = await model.findAll();
    reply.send(products)
}

exports.showByUuidController = async (req, reply) => {
    const { uuid } = req.params
    const product = await model.findOne({ where: { uuid } })
    reply.send(product)
}

// exports.updateController = async (req, reply) => {
//     const { uuid } = req.params
//     const data = req.body

//     let product = await model.findOne({ where: { uuid } })
//     product = (await product.update(data)).get()

//     reply.send(product)
// }
