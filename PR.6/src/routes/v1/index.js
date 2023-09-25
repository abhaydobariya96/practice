const express = require("express")
const categoryRoute = require("./category.route")
const coachRoute = require("./coach.route")
const contactRoute = require("./contact.route")
const newsRoute = require("./news.route")
const playerRoute = require("./player.route")
const resultRoute = require("./result.route")
const galleryRoute = require("./gallery.route")
const tournamentRoute = require("./tournament.route")

const router = express.Router();

router.use("/category",categoryRoute)
router.use("/coach",coachRoute)
router.use("/contact",contactRoute)
router.use("/news",newsRoute)
router.use("/player",playerRoute)
router.use("/result",resultRoute)
router.use("/gallery",galleryRoute)
router.use("/tournament",tournamentRoute)

module.exports = router