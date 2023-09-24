const express = require("express")
const coachRoute = require("./coach.route")
const contact_usRoute = require("./contact_us.route")
const newsRoute = require("./news.route")
const playerRoute = require("./player.route")
const resultRoute = require("./result.route")
const galleryRoute = require("./gallery.route")
const tournamentRoute = require("./tournament.route")

const router = express.Router();

router.use("/coach",coachRoute)
router.use("/contact_us",contact_usRoute)
router.use("/news",newsRoute)
router.use("/player",playerRoute)
router.use("/result",resultRoute)
router.use("/gallery",galleryRoute)
router.use("/tournament",tournamentRoute)
