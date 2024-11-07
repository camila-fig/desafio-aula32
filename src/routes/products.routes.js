const express = require("express")
const generateProducts = require("../utils/generateProducts")
const CustomError = require("../service/errors/CustomError")
const EErrors = require("../service/errors/enums")
const generateUserErrorInfo = require("../service/errors/info")

const products = []

const router = express.Router()

router.get('/', (req, res) => {
    //res.status(200).json("a rota tá ok")
    res.send({ status: "success", payload: products })
})

router.get('/mockingproducts', (req, res) => {
    const products = generateProducts(100)
    res.status(200).json({ products: products })
})

router.post('/', (req, res) => {
    const { _id, title, description, price, thumbnail, code, stock, status } = req.body

    if (!_id || typeof _id !== 'string' ||
        !title || typeof title !== 'string' ||
        !description || typeof description !== 'string' ||
        !price || price < 0 || typeof price !== 'number' ||
        !thumbnail || typeof thumbnail !== 'string' ||
        !code || code < 0 || typeof code !== 'number' ||
        !stock || stock < 0 || typeof stock !== 'number' ||
        !status || typeof status !== 'boolean') {
        const error = CustomError.createError({
            name: "Product creation error",
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