const { Product } = require("../models");
const product = require("../models/product.model");

/**
 * create product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */

const createProduct = async (reqBody) => {
    return Product.create(reqBody)
};

const listProduct = async (reqBody) => {
    return Product.find({ $or: [{ is_activ: true }] })
};

const deleteProduct = async (id) => {
    return Product.findByIdAndDelete(id)
};
const getProductById = async (productid) => {
    return Product.findById(productid)
};

const updateDetails = async (id, updateBody) => {
    return Product.findByIdAndUpdate(id, { $set: updateBody })
};



module.exports = {
    createProduct,
    listProduct,
    deleteProduct,
    getProductById,
    updateDetails
}