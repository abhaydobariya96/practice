const { categoryService, emailService } = require("../services")
const fs = require("fs")

//create category
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        // if (req.file) {
        //     reqBody.image = req.file.filename;
        // } else {
        //     throw new Error("category image is required!");
        // }
        const categoryEx = await categoryService.getCategoryByEmail(reqBody,email);
        if (categoryEx){
            throw new Error ("User already created by this email!")
        }

        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error("category not found!");
        }

        res.status(200).json({
            success: true,
            message: ("category create successfully!"),
            data: { category }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message

        })

    }
}

const listCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.listCategory(reqBody);
        if (!category) {
            throw new Error("category not found!");
        }

        res.status(200).json({
            success: true,
            message: ("category list successfully!"),
            data: { category }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message

        })

    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.Id;
        const category = await categoryService.listCategory(id);
        // console.log(categor+"=======================");
        if (!category) {
            throw new Error("category not found!");
        }
        await categoryService.deleteCategory(id);

        res.status(200).json({
            success: true,
            message: ("category delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message

        })

    }
}

const updateCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const id = req.params.categoryId;
        const category = await categoryService.getCategoryById(id);
        if (!category) {
            throw new Error("category not found!");
        }

        if (req.file) {
            reqBody.image = req.file.filename;
        }


        const updatecategory = await categoryService.updateDetail(id, req.body);
        if (updatecategory) {
            const filePath = `./public/image/${category.image}`
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        } else {
            throw new Error("Somthing want to wrong, please try again or leter!")
        }

        res.status(200).json({
            success: true,
            message: ("category details update successfully!"),
            data: updatecategory,
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message

        })

    }
}

const sendMail = async (req, res) => {
    try {
        const reqBody = req.body;
        const sendEmail = await emailService.sendMail(
            reqBody.email,
            reqBody.subject,
            reqBody.text
        );
        if (!sendEmail) {
            throw new Error("Something went wrong, please try again or later.");
        }

        res
            .status(200)
            .json({ success: true, message: "Email send successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports = {
    createCategory,
    listCategory,
    deleteCategory,
    updateCategory,
    sendMail
}