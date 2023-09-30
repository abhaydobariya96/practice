const Joi = require("joi");

/** create user */
const createBlog = {
    body: Joi.object().keys({
        mage: Joi.string().allow(""),
        Blog_Logo: Joi.string().allow(""),
        Date: Joi.string().required().trim(),
        Title: Joi.string().required().trim(),
        Tag: Joi.string().required().trim(),
        Desc: Joi.string().required().trim(),
        Author: Joi.string().required().trim(),
        Comments: Joi.string().required().trim(),
        Position: Joi.string().required().trim()
    }),
};

/**list blog */
const listBlog = {
    query: Joi.object().keys({
        mage: Joi.string().allow(""),
        Blog_Logo: Joi.string().allow(""),
        Date: Joi.string().allow("").trim(),
        Title: Joi.string().allow("").trim(),
        Tag: Joi.string().allow("").trim(),
        Desc: Joi.string().allow("").trim(),
        Author: Joi.string().allow("").trim(),
        Comments: Joi.string().allow("").trim(),
        Position: Joi.string().allow("").trim()
    }),
};

module.exports = {
    createBlog,
    listBlog
};