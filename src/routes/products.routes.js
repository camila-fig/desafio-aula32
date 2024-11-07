const express = require("express")
const generateProducts = require("../utils/generateProducts")
const CustomError = require("../service/errors/CustomError")
const EErrors = require("../service/errors/enums")
const { generateUserErrorInfo } = require("../service/errors/info")

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json("a rota tá ok")
    // res.send({ status: "success", payload: products })
})

router.get('/mockingproducts', (req, res) => {
    const products = generateProducts(100)
    res.status(200).json({ products: products })
})

router.post('/', (req, res) => {
    const { title, description, price, thumbnail, code, stock, status } = req.body

    if ( !title || !description || price < 0 || !thumbnail || !code || stock < 0 || !status === Boolean) {
        const error = CustomError.createError({
            name: "User creation error",
            cause: generateUserErrorInfo({ _id, title, description, price, thumbnail, code, stock, status }),
            message: "Erro tentando criar produto",
            code: EErrors.INVALID_TYPES_ERROR
        })
        return res.send({ status: 'erro', payload: error })
    };

    const product = {
        _id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        status
    }

    products.push(product);
    res.send({ status: 'success', payload: product })
})

module.exports = router