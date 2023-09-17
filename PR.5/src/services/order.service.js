const { Order } = require("../models");
const order = require("../models/order.model");

/**
 * create order
 * @param {object} reqBody
 * @return {promise<Order>}
 */

const createOrder = async (reqBody) => {
    return Order.create(reqBody)
};

// list order
const listOrder = async (reqBody) => {
    return Order.find({ $or: [{ is_active: true }] })
};

// delete order
const deleteOrder = async (id) => {
    return Order.findByIdAndDelete(id)
};

//update order
const getOrderById = async (orderId) => {
    return Order.findById(orderId)
};

const updateDetails = async (id, updateBody) => {
    return Order.findByIdAndUpdate(id, { $set: updateBody })
};



module.exports = {
    createOrder,
    listOrder,
    deleteOrder,
    getOrderById,
    updateDetails

}

