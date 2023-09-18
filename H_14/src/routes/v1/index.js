const express = require("express");
const cartRouter = require("./cart.route");
const orderRoute = require("./order.route");
const userRoute = require("./user.route");
const electronicRoute = require("./electronic.route");
const phoneRoute = require("./phone.route");
const vivoRoute = require("./vivo.route.js");


const router = express.Router();

router.use("/cart", cartRouter);
router.use("/order", orderRoute);
router.use("/user", userRoute);
router.use("/electronic", electronicRoute);
router.use("/phone", phoneRoute);
router.use("/vivo", vivoRoute);

module.exports = router;