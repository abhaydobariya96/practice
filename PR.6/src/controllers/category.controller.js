const { categoryService } = require("../services")

const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error("category not found!");
        }
        res.status(200).json({
            success: true,
            message: ("category create successfully"),
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
        const id = req.params.categoryId;
        const category = await categoryService.getCategoryById(id);
        if (!category) {
            throw new Error("category not found!");
        }
        await categoryService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("category update successfully"),
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