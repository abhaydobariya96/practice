const Joi = require("joi")
//create product
const createProduct = {
    body: Joi.object().keys({
        Product_Name: Joi.string().required().trim(),
        Product_Desc: Joi.string().required().trim(),
        Brand: Joi.string().required().trim(),
        Price: Joi.number().integer(),
    })
}

//list product
const listProduct = {
    qyery: Joi.object().keys({
        Product_Name: Joi.string().allow("").trim(),
        Product_Desc: Joi.string().allow("").trim(),
        Brand: Joi.string().allow("").trim(),
        Price: Joi.number().integer(),
    })
}


module.exports = {
    createProduct,
    listProduct
}