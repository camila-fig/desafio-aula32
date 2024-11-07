const express = require("express")
const productsRoutes = require("./routes/products.routes")
const errorHandler = require('./middleware/index')

const app = express()
app.use(express.json())

app.use('/', productsRoutes)

app.use(errorHandler)

module.exports = app