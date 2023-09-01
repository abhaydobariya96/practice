const Joi = require("joi")


// create student
const createStudent = {
    body: Joi.object().keys({
        Sudent_id: Joi.string().required().trim(),
        First_name: Joi.string().required().trim(),
        Last_name : Joi.string().required().trim(),
        Student_DOB: Joi.string().required().trim(),
        Gender: Joi.string().required().trim(),
    })

}
// list student
const listStudent = {
    query: Joi.object().keys({
        Sudent_id: Joi.string().allow("").trim(),
        First_name: Joi.string().allow("").trim(),
        Last_name: Joi.string().allow("").trim(),
        Student_DOB: Joi.string().allow("").trim(),
        Gender: Joi.string().allow("").trim(),
    })
}

module.exports={createStudent, listStudent}