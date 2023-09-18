const Joi = require("joi")

//create cart
const createElectronic = {
  body: Joi.object().keys({
    name: Joi.string().required().trim(),
    type: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
  })
}

const listElectronic = {
  query:Joi.object().keys({
    name: Joi.string().allow("").trim(),
    type: Joi.string().allow("").trim(),
    description: Joi.string().allow("").trim(),
  })
}

module.exports = {
  createElectronic,
  listElectronic,
}