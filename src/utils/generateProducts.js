const { faker } = require("@faker-js/faker")
const fs = require("fs").promises

const generateProducts = (number) => {    
    const products = []
    for (let index = 0; index < number; index++) {
        const product = {
            _id: faker.string.alphanumeric(10) ,
            title: faker.food.dish(),
            description: faker.food.description(),
            price: `R$${faker.finance.pin(2)},00`,
            thumbnail: faker.image.avatar(),
            code: Number(faker.finance.pin(4)),
            stock: Number(faker.finance.pin(2)),
            status: faker.datatype.boolean(0.95),
        }
        products.push(product)
        const dataToSave = JSON.stringify(products)
        fs.writeFile("./data.json", dataToSave)
    }
    return products
}

module.exports = generateProducts