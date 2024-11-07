const express = require("express")
const generateProducts = require("../utils/generateProducts")

const router = express.Router()

router.get('/', (req, res) => {
    const products = generateProducts(100)
    res.status(200).json({ products: products })
})

module.exports = router