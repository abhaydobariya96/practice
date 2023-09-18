const { Cart } = require("../models")

/**
 * craete cart
 * @param {object} reqBody
 * @returns {Promise<Cart>}
 */

const createCart = async (reqBody) => {
    return Cart.cteate(reqBody)
};

//list cart
const listCart = async (reqBody) => {
    return Cart.find({ $or: [{ is_activ: true }] })
};

//delete cart
const deleteCart = async (id) => {
    return Cart.findByIdAndDelete(id)
};

//update cart
const getOrderById = async (cartid) => {
    return Cart.findById(cartid)
};

const updateDetails = async (id, updateBody) => {
    return Cart.findByIdAndUpdate(id, { $set: updateBody })
};

module.exports = {
    createCart,
    listCart,
    deleteCart,
    getOrderById,
    updateDetails
}