const Sequelize = require("sequelize");
const connection = require ("./database");

const Task = connection.define('tarefa',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    prioridade:{
        type: Sequelize.TEXT,
        allowNull: false
    }

})

Task.sync({force:false}).then(()=>{
    console.log("tabela criada com sucesso")
})

module.exports = Task;