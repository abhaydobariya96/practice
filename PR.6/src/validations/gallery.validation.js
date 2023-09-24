const Joi = require("joi")

const createGallery = {
    body:Joi.object().keys({
        Gallery_Name:Joi.string().required().trim(),
        Description:Joi.string().required().trim(),
        Creatio_Date:Joi.string().required().trim(),
        Uploader:Joi.string().required().trim(),
        Privacy:Joi.string().required().trim(),
        Comments:Joi.string().required().trim(),
    })
}
const listGallery = {
    query:Joi.object().keys({
        Gallery_Name:Joi.string().allow("").trim(),
        Description:Joi.string().allow("").trim(),
        Creatio_Date:Joi.string().allow("").trim(),
        Uploader:Joi.string().allow("").trim(),
        Privacy:Joi.string().allow("").trim(),
        Comments:Joi.string().allow("").trim(),
    })
}

module.exports={
    createGallery,
    listGallery
}