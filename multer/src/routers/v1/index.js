const express = require("express");
const categoryRoute = require("./category.routr");
const bookRoute = require("./book.route");
const hotelRoute = require("./hotel.route");
const stationaryRoute = require("./stationary.route");
const userRoute = require("./user.route");

const router = express.Router();

router.use("/category", categoryRoute);
router.use("/book", bookRoute);
router.use("/hotel", hotelRoute);
router.use("/stationary", stationaryRoute);
router.use("/user", userRoute);

module.exports = router;