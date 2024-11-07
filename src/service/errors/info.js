const generateUserErrorInfo = (product) => {
    return `Alguma propriedade não foi informada.
    Lista de propriedades requeridas:
    * _id          : precisa ser uma string, informado ${product._id}
    * title        : precisa ser uma string, informado ${product.title}
    * description  : precisa ser uma string, informado ${product.description}
    * price        : precisa ser um número maior que zero, informado ${product.price}
    * thumbnail    : precisa ser uma string, informado ${product.thumbnail}
    * code         : precisa ser uma string, informado ${product.code}
    * stock        : precisa ser um número maior e diferente de zero, informado ${product.stock}
    * status       : precisa ser um boleano, informado ${product.status}`
}

module.exports = { generateUserErrorInfo }