const sequelize = require('../../models')
const initModels = require('../../models/init-models')
const models = initModels(sequelize)
const bcrypt = require("bcrypt")

const authLogin = (req, res) => {
    res.send('login')
}

const authRegister = async (req, res) => {

    const { password } = req.body

    const passwordHash = await bcrypt.hash(password, 10)
    console.log(passwordHash)

    res.send('anhvan')
}

module.exports = { authLogin, authRegister }