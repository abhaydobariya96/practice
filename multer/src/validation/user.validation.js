const Joi = require("joi");

// create category

const  createUser = {
    body: Joi.object().keys({
        user_name: Joi.string().required().trim(),
        user_desc: Joi.string().required().trim(),
        user_count: Joi.string().required().trim(),
    }),
};
const  getUserList = {
    body: Joi.object().keys({
        user_name: Joi.string().allow("").trim(),
        user_desc: Joi.string().allow("").trim(),
        user_count: Joi.string().allow("").trim(),
    }),
};

module.exports = {createUser, getUserList}