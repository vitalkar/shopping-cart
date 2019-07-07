const products = require('../data/seed');

function getAllProducts(req, res) {
    res.status(200).json(products);
}

function getSingleProduct(req, res) {
    const { id } = req.params;
    res.status(200).json({ id }); 
}

module.exports = {
    getAllProducts,
    getSingleProduct
}