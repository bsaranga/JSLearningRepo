const config = require('../config/config')
const { Sequelize } = require('sequelize')
const user = require('./models/user.model')

const sequelize = new Sequelize(config.databaseConfig)

// create model
async function createModel(model, sqlConn) {
    await model(sqlConn);
    console.log('Model(s) created');
}

createModel(user, sequelize);

module.exports = sequelize