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
  return Music.find({ $or: [{ is_active: true }] })
};

const deleteMusic = async (id) => {
  return Music.findByIdAndDelete(id)
};

const getMusicById = async (musicId) => {
  return Music.findById(musicId)
}

const updateDetails = async (musicId,reqBody) => {
  return Music.findByIdAndUpdate(musicId,{$set:reqBody})
}

module.exports = { createMusic, listMusic, deleteMusic, getMusicById,updateDetails }