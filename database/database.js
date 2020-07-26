const Sequelize = require('sequelize')

const connection = new Sequelize('gerenciadordetarefas','youruserhere','yourpasswordhere',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;