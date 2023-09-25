const express = require("express")
const  hotelValidation = require("../../validation/hotel.validation");
const  hotelController = require("../../controller/hotel.controller");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload");

const router = express.Router();

// create hotel
  router.post(
    "/create-hotel",
    upload.single("image"),
    validate(hotelValidation.createHotel),
    hotelController.createHotel
  );

// list hotel
router.get(
  "/list-hotel",
  validate(hotelValidation.listhotel),
  hotelController.listHotel
);

// delete hotel
router.delete(
  "/delete-hotel/:Id",
  hotelController.deleteHotel
);

// update hotel
router.put(
  "/update-hotel/:Id",
  // upload.single("image"),
  hotelController.updateHotel
);

module.exports = router;