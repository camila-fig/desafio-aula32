const express = require("express")
const productsRoutes = require("./routes/products.routes")

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json("a rota tá ok")
})
app.use('/mockingproducts', productsRoutes)

module.exports = app