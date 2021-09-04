// AUTH CONFIG VALUES
const env = require('config')

module.exports = {

    // Expres In
    expiresIn: "24h", // See https://github.com/vercel/ms

    // Alghoritm
    algorithm: 'HS256', // See https://github.com/fastify/fastify-jwt#sign-options

}