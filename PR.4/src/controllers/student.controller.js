const { studentService } = require("../services");

/** create student*/
const createStudent = async (req, res) => {
    try {
        const reqBody = req.body;

        const student = await studentService.createStudent(reqBody);
        if (!student) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "student create successfully!",
            data: { student },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** list student*/
const listStudent = async (req, res) => {
    try {
        const reqBody = req.body;

        const student = await studentService.listStudent(reqBody);
        if (!student) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "student list successfully!",
            data: { student },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** delete student*/
const deleteStudent = async (req, res) => {
    try {
        const id = req.params.Id
        const student = await studentService.listStudent();
        if (!student) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await studentService.deleteStudent(id)

        res.status(200).json({
            success: true,
            message: "student delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


/** update student*/
const updateStudent = async (req, res) => {
    try {
        const id = req.params.Id;

        const studentExists = await studentService.getStudentById(id);
        if (!studentExists) {
            throw new Error("Student Not Found!");
        }
await studentService.updateDetails(id,req.body)
        res.status(200).json({
            success: true,
            message: "student details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports = {createStudent,listStudent,deleteStudent,updateStudent}