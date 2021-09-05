// ----------------------------------------------------------
// Sequelize ORM Config Values
//    Uses the env variables (config/default.json file)
// ----------------------------------------------------------
const env = require('config')

const sequelizeConfig = () => {
  return {
    development: {
      username: env.get('db.user'),
      password: env.get('db.password'),
      database: env.get('db.name'),
      host: env.get('db.host'),
      dialect: 'mysql'
    },
    test: {
      username: env.get('db.user'),
      password: env.get('db.password'),
      database: env.get('db.name'),
      host: env.get('db.host'),
      dialect: 'mysql'
    },
    production: {
      username: env.get('db.user'),
      password: env.get('db.password'),
      database: env.get('db.name'),
      host: env.get('db.host'),
      dialect: 'mysql'
    }
  }
}

module.exports = sequelizeConfig()