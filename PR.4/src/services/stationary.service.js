const { Student} = require("../models");

/**
 * Create Student
 * @param {object} reqBody
 * @returns {Promise<Student>}
 */
const createStudent = async (reqBody) => {
  return Student.create(reqBody)
};

  const listStudent = async (reqBody) => {
    return Student.find({ $or: [ { is_active:true}]})
  };

  const deleteStudent = async (id) => {
    return Student.findByIdAndDelete(id)
  };

  const getStudentById = async (studentid) => {
    return Student.findById( studentid)
  };

  const updateDetails = async (studentid,reqBody) => {
    return Student.findByIdAndUpdate( studentid,{$set:reqBody})
  };

module.exports = { createStudent,listStudent,deleteStudent,getStudentById,updateDetails }