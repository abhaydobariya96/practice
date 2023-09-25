const { categoryService } = require("../services")
const fs = require("fs")


const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.image = req.file.filename;
        } else {
            throw new Error("category image is required!");
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
            message: ("category list successfully"),
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
        const category = await categoryService.listCategory();
        if (!category) {
            throw new Error("category not found!");
        }
        await categoryService.deleteCategory(id)
        res.status(200).json({
            success: true,
            message: ("category delete successfully"),
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
        const categoryEx = await categoryService.getCategoryById(id);
        if (!categoryEx) {
            throw new Error("category not found!");
        }
        if (req.file) {
            reqBody.image = req.file.filename;
        }
        const category = await categoryService.updateDetails(id, req.body)
        if (category) {
            const filePath = `./public/image/${category.image}`
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
        } else {
            throw new Error("Somthing want to wrong, please try again or leter!")
        }
        res.status(200).json({
            success: true,
            message: ("category update successfully"),
            data: category,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createCategory,
    listCategory,
    deleteCategory,
    updateCategory
}