const { cartService, orderService } = require("../services")

// create cart
const createCart = async (req, res) => {
    try {
        const reqBody = req.body;
        const cart = await cartService.createCart(reqBody);

        if (!cart) {
            throw new Error("cart not found!");
        }
        res.status(200).json({
            success: true,
            message: ("cart create successfully!"),
            data: { cart }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// list cart
const listCart = async (req, res) => {
    try {
        const reqBody = req.body;
        const cart = await cartService.listCart(reqBody);

        if (!cart) {
            throw new Error("cart not found!");
        }
        res.status(200).json({
            success: true,
            message: ("cart list successfully!"),
            data: { cart }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// delete cart
const deleteCart = async (req, res) => {
    try {
        const id = req.params.Id;
        const cart = await cartService.listCart(id);
        if (!cart) {
            throw new Error("cart not found!");
        }
        await cartService.deleteCart(id);
        res.status(200).json({
            success: true,
            message: ("cart delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// update cart
const updateCart = async (req, res) => {
    try {
        const id = req.params.cartId;
        const cart = await cartService.getCartById(id);
        if (!cart) {
            throw new Error("cart not found!");
        }
        await cartService.updateDetails(id,req.body);
        res.status(200).json({
            success: true,
            message: ("cart details update successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createCart,
    listCart,
    deleteCart,
    updateCart
}