const Joi = require("joi")

const createOrder ={
    body:Joi.object().keys({
        Order_Date:Joi.string().required().trim(),
        Total_order:Joi.number().integer(),
        Order_Status:Joi.string().required().trim(),
        Shipping_Address:Joi.string().required().trim(),
    })
}

// list order
const listOrder ={
    qyery:Joi.object().keys({
        Order_Date:Joi.string().allow("").trim(),
        Total_order:Joi.number().integer(),
        Order_Status:Joi.string().allow("").trim(),
        Shipping_Address:Joi.string().allow("").trim(),
    })
}



module.exports = {
    createOrder,
    listOrder
}