const Joi = require("joi");

// create book

const  createHotel = {
    body: Joi.object().keys({
        hotel_name: Joi.string().required().trim(),
        hotel_address: Joi.string().required().trim(),
        hotel_desc: Joi.string().required().trim(),
        hotel_email: Joi.string().required().trim(),
        image: Joi.string().allow()
    }),
};

const  listhotel = {
    qurey: Joi.object().keys({
        hotel_name: Joi.string().allow("").trim(),
        hotel_address: Joi.string().allow("").trim(),
        hotel_desc: Joi.string().allow("").trim(),
        hotel_email: Joi.string().allow("").trim(),
        image: Joi.string().allow("")
    }),
};

module.exports = {createHotel,listhotel}