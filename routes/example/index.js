'use strict'

module.exports = async function (fastify, opts) {
  
	// Take it route as example
	fastify.get(
		'/',
		//{ preValidation: [fastify.auth] }, // protected route
		async function (request, reply) {
			return 'this is an example route'
		}
	)

}
