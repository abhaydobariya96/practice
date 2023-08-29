const { jewelleryService } = require("../services");

/** create jewellery*/
const createJewellery = async (req, res) => {
    try {
        const reqBody = req.body;

        const jewellery = await jewelleryService.createJewellery(reqBody);
        if (!jewellery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "jewellery create successfully!",
            data: { jewellery },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


/** list jewellery*/
const listJewellery = async (req, res) => {
    try {
        const reqBody = req.body;

        const jewellery = await jewelleryService.listJewellery(reqBody);
        if (!jewellery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "jewellery list successfully!",
            data: { jewellery },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** delete jewellery*/
const deleteJewellery = async (req, res) => {
    try {
        const id = req.params.Id
        const jewellery = await jewelleryService.listJewellery();
        if (!jewellery) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await jewelleryService.deleteJewellery(id)
        res.status(200).json({
            success: true,
            message: "jewellery delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


/** update jewellery*/
const updateJewellery = async (req, res) => {
    try {
        const id = req.params.Id;

        const jewelleryExists = await jewelleryService.getJewelleryById(id);
        if (!jewelleryExists) {
            throw new Error("jewellery not found");
        }
        await jewelleryService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: "jewellery details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports = {
    createJewellery,
    listJewellery,
    deleteJewellery,
    updateJewellery
}