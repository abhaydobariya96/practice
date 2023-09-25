const { News } = require("../models")

/**
 * @param {object} reqBody
 * @returns {Promise<News>}
 */
const createNews = async (reqBody) => {
    return News.create(reqBody)
}

const listNews = async (reqBody) => {
    return News.find(reqBody).populate("gallery")
}
const deleteNews = async (Id) => {
    return News.findByIdAndDelete(Id)
}
const getNewsById = async (newsId) => {
    return News.findById(newsId)
}
const updateDetails = async (Id, updateBody) => {
    return News.findByIdAndUpdate(Id, { $set: updateBody })
}


module.exports = {
    createNews,
    listNews,
    deleteNews,
    getNewsById,
    updateDetails
}