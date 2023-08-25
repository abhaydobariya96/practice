const { Music } = require("../models");

/**
 * Create Music
 * @param {object} reqBody
 * @returns {Promise<Music>}
 */
const createMusic = async (reqBody) => {
    return Music.create(reqBody)
  };

  const listMusic = async (reqBody) => {
    return Music.find(reqBody)
  };

  const deleteMusic = async (id) => {
    return Music.findByIdAndDelete(id)
  };

   module.exports = { createMusic,listMusic,deleteMusic}