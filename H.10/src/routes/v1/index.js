const express = require("express");
const productRoute = require("./product.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");


const router = express.Router();

router.use("/product", productRoute);
router.use("/user", userRoute);
router.use("/category", categoryRoute);

module.exports = router;