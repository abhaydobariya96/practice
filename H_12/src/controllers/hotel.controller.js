const { hotelService } = require("../services");

/** create hotel */
const createHotel = async (req, res) => {
    try {
        const reqBody = req.body;

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
        const hotel = await hotelService.listHotel();
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
        const id = req.params.Id

        const hotelExists = await hotelService.getHotelById(id);

        if (!hotelExists) {
            throw new Error("Hotel Not Found!");
        }
        await hotelService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: "Hotel Details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createHotel,
    listHotel,
    deleteHotel,
    updateHotel
};
