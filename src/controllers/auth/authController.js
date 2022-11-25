const sequelize = require('../../models')
const initModels = require('../../models/init-models')
const models = initModels(sequelize);

const authLogin = (req, res) => {
    console.log(models)
}

const authRegister = (req, res) => {
    console.log(models)
}

module.exports = { authLogin, authRegister }