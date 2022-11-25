require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
const rootRouter = require('./routers')
app.use(cors())
app.use(express.json())

app.use('/api', rootRouter)

app.listen(process.env.port_app, () => {
    console.log(`vnfood app listening on port ${process.env.port_app}`)
})