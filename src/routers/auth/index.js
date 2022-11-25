const express = require('express')
const authRouter = express.Router()

const { authLogin, authRegister } = require('../../controllers/auth/authController');

authRouter.post('/login', authLogin)
authRouter.post('/register', authRegister)

module.exports = authRouter