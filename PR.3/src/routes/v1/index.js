const express = require("express");
const moblileRoute = require("./mobile.route")


const router = express.Router();


router.use("/mobile",moblileRoute);

module.exports=router;