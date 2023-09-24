const Joi = require("joi")

const createTournament = {
    body: Joi.object().keys({
        Tournament_Name: Joi.string().required().trim(),
        Start_Date: Joi.string().required().trim(),
        End_Date: Joi.string().required().trim(),
        Location: Joi.string().required().trim(),
        Organizer: Joi.string().required().trim(),
        Participants: Joi.string().required().trim(),
        Winner: Joi.string().required().trim(),
    })
}
const listTournament = {
    query: Joi.object().keys({
        Tournament_Name: Joi.string().allow("").trim(),
        Start_Date: Joi.string().allow("").trim(),
        End_Date: Joi.string().allow("").trim(),
        Location: Joi.string().allow("").trim(),
        Organizer: Joi.string().allow("").trim(),
        Participants: Joi.string().allow("").trim(),
        Winner: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createTournament,
    listTournament
}