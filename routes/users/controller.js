const config = require('../../app/config/app')
const Sequelize = require('sequelize')
const dbConnection = require('../../app/lib/dbConnection')
const db = dbConnection(require('fastify')({ logger: true }))
const User = require('../../app/models/user')

const model = User(db, Sequelize.DataTypes); // Get model instance

exports.allController = async (req, reply) => {
    reply.send([])
}