const express = require("express");
const cartRouter = require("./cart.route");
const mobileRoute = require("./mobile.route");
const orderRoute = require("./order.route");
const productRoute = require("./product.route");
const userRoute = require("./user.route");
const paymentRoute = require("./payment.route");


const router = express.Router();

router.use("/cart", cartRouter);
router.use("/mobile", mobileRoute);
router.use("/order", orderRoute);
router.use("/product", productRoute);
router.use("/user", userRoute);
router.use("/payment", paymentRoute);

module.exports = router;