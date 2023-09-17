const { paymentService } = require("../services")

//create payment
const createPayment = async (req, res) => {
    try {
        const reqBody = req.body;
        const payment = await paymentService.createPayment(reqBody)
        if (!payment) {
            throw new Error("payment not found")
        }
        res.status(200).json({
            success: true,
            message: ("payment create successfully"),
            data: { payment }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//list payment
const listPayment = async (req, res) => {
    try {
        const reqBody = req.body;
        const payment = await paymentService.listPayment(reqBody)
        if (!payment) {
            throw new Error("payment not found")
        }
        res.status(200).json({
            success: true,
            message: ("payment list successfully"),
            data: { payment }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//delete payment
const deletePayment = async (req, res) => {
    try {
        const id = req.params.Id;
        const payment = await paymentService.listPayment(id)
        if (!payment) {
            throw new Error("payment not found")
        }
        await paymentService.deletePayment(id)
        res.status(200).json({
            success: true,
            message: ("payment delete successfully")
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//update payment
const updatePayment = async (req, res) => {
    try {
        const id = req.params.paymentId;
        const payment = await paymentService.getPaymentById(id)
        if (!payment) {
            throw new Error("payment not found")
        }
        await paymentService.updateDetails(id,req.body)
        res.status(200).json({
            success: true,
            message: ("payment details update successfully")
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}




module.exports ={
    createPayment,
    listPayment,
    deletePayment,
    updatePayment
}