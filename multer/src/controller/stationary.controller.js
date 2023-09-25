const { stationaryService } = require("../services");
const fs = require("fs")

/** create stationary*/
const createStationary = async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.image = req.file.filename;
        } else {
            throw new Error("stationary image is required!");
        }

        const stationary = await stationaryService.createStationary(reqBody);
        if (!stationary) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "stationary create successfully!",
            data: { stationary },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** list stationary*/
const listStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const stationary = await stationaryService.listStationary(reqBody);
        if (!stationary) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "stationary list successfully!",
            data: { stationary },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** deletestationary*/
const deleteStationary = async (req, res) => {
    try {
        const id = req.params.Id
        const stationary = await stationaryService.listStationary(id);
        if (!stationary) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await stationaryService.deleteStationary(id)

        res.status(200).json({
            success: true,
            message: "stationary delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** updatestationary*/
const updateStationary = async (req, res) => {
    try {
        // const reqBody = req.body;
        const id = req.params.id;
        const stationaryExists = await stationaryService.getStationaryById(id);
        if (!stationaryExists) {
            throw new Error("stationary not found!");
        }
        // if (req.file) {
        //     reqBody.image = req.file.filename;
        // }

        const updatestationary = await stationaryService.updateDetails(id, req.body)
        // if (updatestationary) {
        //     const filePath = `./public/image/${stationary.image}`
        //     if (fs.existsSync(filePath)) {
        //         fs.unlinkSync(filePath);
        //     }
        // } else {
        //     throw new Error("Somthing want to wrong, please try again or leter!")
        // }

        res.status(200).json({
            success: true,
            message: "stationary update successfully!",
            data: updatestationary,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports = {
    createStationary,
    listStationary,
    deleteStationary,
    updateStationary
}