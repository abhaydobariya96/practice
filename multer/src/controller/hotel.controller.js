const fs = require("fs");
const { hotelService } = require("../services");

/** create hotel */
const createHotel = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.image = req.file.filename;
        } else {
            throw new Error("hotel image is required!");
        }
        const hotel = await hotelService.createHotel(reqBody);
        if (!hotel) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Hotel create successfully!",
            data: { hotel },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


/** list hotel */
const listHotel = async (req, res) => {
    try {
        const reqBody = req.body;

        const hotel = await hotelService.listHotel(reqBody);
        if (!hotel) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Hotel create successfully!",
            data: { hotel },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};



/** delete hotel */
const deleteHotel = async (req, res) => {
    try {
        const id = req.params.Id
        const hotel = await hotelService.listHotel();

        if (!hotel) {
            throw new Error("Something went wrong, please try again or later!");
        }

        await hotelService.deleteHotel(id)

        res.status(200).json({
            success: true,
            message: "Hotel successfully delete!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** update hotel */
const updateHotel = async (req, res) => {
    try {
        // const reqBody = req.body;
        const id = req.params.Id;
        const hotel = await hotelService.getHotelByIb();
        if (!hotel) {
            throw new Error("hotel not found!");
        }
        // if (req.file) {
        //     reqBody.image = req.file.filename;
        // }
        const updatehotel = await hotelService.updateDetails(id, req.body)
        // if (updatehotel) {
        //     const filePath = `./public/image/${hotel.image}`
        //     if (fs.existsSync(filePath)) {
        //         fs.unlinkSync(filePath);
        //     }
        // } else {
        //     throw new Error("Somthing want to wrong, please try again or leter!")
        // }

        res.status(200).json({
            success: true,
            message: ("hotel details update successfully!"),
            /**data: updatehotel,*/
        });
    } catch (error) {
        res.status(400).json({
             success: false,
             message: error.message
             });
    }
};


module.exports = { createHotel, listHotel, deleteHotel, updateHotel };
