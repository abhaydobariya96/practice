const Joi = require("joi")

const createPhone ={
    body:Joi.object().keys({
        Company_name:Joi.string().required().trim(),
        android_and_iphone:Joi.string().required().trim(),
        type:Joi.string().required().trim(),
        description:Joi.string().required().trim(),
    })
}

// list order
const listPhone ={
    qyery:Joi.object().keys({
        Company_name:Joi.string().allow("").trim(),
        android_and_iphone:Joi.string().allow("").trim(),
        type:Joi.string().allow("").trim(),
        description:Joi.string().allow("").trim(),
    })
}



module.exports = {
    createPhone,
    listPhone,
}