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

/**
 * Get a product by uuid
 * 
 * @param {object} req 
 * @param {object} reply 
 */
exports.showByUuidController = async (req, reply) => {
    const { uuid } = req.params
    const product = await model.findOne({ where: { uuid } })
    reply.send(product)
}

/**
 * Create new product
 * 
 * @param {object} req 
 * @param {object} reply 
 */
exports.storeController = async (req, reply) => {
    const data = req.body
    const product = await model.create(data);
    reply.send(product)
}

/**
 * Update a product
 * 
 * @param {object} req 
 * @param {object} reply 
 */
exports.updateController = async (req, reply) => {
    const { uuid } = req.params
    const data = req.body

    let product = await model.findOne({ where: { uuid } })
    product = (await product.update(data)).get()

    reply.send(product)
}

/**
 * Delete a product
 * 
 * @param {object} req 
 * @param {object} reply 
 */
exports.deleteController = async (req, reply) => {
    const { uuid } = req.params
    await model.destroy({ where: { uuid } })
    reply.send({
        message: 'Record removed successfully.',
        msgKey: 'success',
    })
}
