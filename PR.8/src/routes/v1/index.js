const express = require("express")
const blogRoute = require("./blog.route")

const router = express.Router();

router.use("/blog", blogRoute)

module.exports = router