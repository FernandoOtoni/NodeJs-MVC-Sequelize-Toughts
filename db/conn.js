const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tought', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
  console.log('Connect with DB')
} catch (err) {
  console.log('Error trying to connect with DB: ' + err.message)
}

module.exports = sequelize