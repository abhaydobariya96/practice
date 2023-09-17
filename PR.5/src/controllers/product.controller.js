const { productService } = require("../services")

const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const product = await productService.createProduct(reqBody);
        if (!product) {
            throw new Error("product not found");
        }

        res.status(200).json({
            success: true,
            message: ("product create successfully!"),
            data: { product }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//list product
const listProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const product = await productService.listProduct(reqBody);
        if (!product) {
            throw new Error("product not found");
        }

        res.status(200).json({
            success: true,
            message: ("product list successfully!"),
            data: { product }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//delete product
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.Id;
        const product = await productService.listProduct(id);
        if (!product) {
            throw new Error("product not found");
        }
        await productService.deleteProduct(id)
        res.status(200).json({
            success: true,
            message: ("product delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//update product
const updateProduct = async (req, res) => {
    try {
        const id = req.params.productId;
        const product = await productService.getProductById(id);
        if (!product) {
            throw new Error("product not found");
        }
        await productService.updateDetails(id)
        res.status(200).json({
            success: true,
            message: ("product delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createProduct,
    listProduct,
    deleteProduct,
    updateProduct
}