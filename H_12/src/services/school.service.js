const { School } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<School>}
 */
const createSchool = async (reqBody) => {
    return School.create(reqBody)
  };

  const listSchool = async (reqBody) => {
    return School.find({ $or: [ { is_active:true}]})
  };

  const deleteSchool = async (id) => {
    return School.findByIdAndDelete(id)
  };

  const getSchoolById = async (schoolid) => {
    return School.findById(schoolid)
  };

  const updateDetails= async (schoolid,reqBody) => {
    return School.findByIdAndUpdate(schoolid,{$set:reqBody})
  };

   module.exports = { createSchool,listSchool,deleteSchool,getSchoolById,updateDetails}