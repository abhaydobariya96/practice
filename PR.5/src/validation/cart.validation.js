const Joi = require("joi")

//create cart
const createCart = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    Quantity: Joi.number().integer(),
    Price: Joi.number().integer(),
    Total_Price: Joi.number().integer(),
  })
}

const listCart = {
  query:Joi.object().keys({
    product_name: Joi.string().allow("").trim(),
    Quantity: Joi.number().integer(),
    Price: Joi.number().integer(),
    Total_Price: Joi.number().integer(),
  })
}

module.exports = {
  createCart,
  listCart,
}