const express = require('express')
const rootRouter = express.Router()

const authRouter = require('./auth')

rootRouter.use('/auth', authRouter)

module.exports = rootRouter