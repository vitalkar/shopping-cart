const faker = require('faker');
const Product =  require('../models/Product');

const products = (function generateProducts() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(new Product(
            faker.commerce.productName(),
            faker.commerce.price(),
            faker.image.fashion(),
        ));
    }
    return arr;
}());

module.exports = products;