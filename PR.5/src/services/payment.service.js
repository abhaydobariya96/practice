const { Payment } = require("../models")

/**
 * @param {object} reqBody
 * @returns {Promise<Payment>}
 */

const createPayment = async (reqBody) => {
    return Payment.create(reqBody)
}

const listPayment = async (reqBody) => {
    return Payment.find({ $or: [{ is_active: true }] })
}

const deletePayment = async (id) => {
    return Payment.findByIdAndDelete(id)
}

const getPaymentById = async (paymentid) => {
    return Payment.findById(paymentid)
}

const updateDetails = async (id, updateBody) => {
    return Payment.findByIdAndUpdate(id, updateBody)
}



module.exports = {
    createPayment,
    listPayment,
    deletePayment,
    getPaymentById,
    updateDetails
}