const { orderService } = require("../services")

const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;
        const order = await orderService.createOrder(reqBody);
        if (!order) {
            throw new Error("order not found");
        }

        res.status(200).json({
            success: true,
            message: ("order create successfully"),
            data: { order }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const listOrder = async (req, res) => {
    try {
        const reqBody = req.body;
        const order = await orderService.listOrder(reqBody);
        if (!order) {
            throw new Error("order not found");
        }

        res.status(200).json({
            success: true,
            message: ("order list successfully"),
            data: { order }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const id = req.params.Id;
        const order = await orderService.listOrder(id);
        if (!order) {
            throw new Error("order not found");
        }
        await orderService.deleteOrder(id);
            res.status(200).json({
                success: true,
                message: ("order delete successfully"),
            });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const updateOrder = async (req, res) => {
    try {
        const id = req.params.orderId;
        const order = await orderService.getOrderById(id);
        if (!order) {
            throw new Error("order not found");
        }
        await orderService.updateDetails(id,req.body);
            res.status(200).json({
                success: true,
                message: ("order delete successfully"),
            });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createOrder,
    listOrder,
    deleteOrder,
    updateOrder
}