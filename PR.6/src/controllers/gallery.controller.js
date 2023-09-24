const { galleryService } = require("../services")

const createGallery = async (req, res) => {
    try {
        const reqBody = req.body;
        const gallery = await galleryService.createGallery(reqBody);
        if (!gallery) {
            throw new Error("gallery not found!");
        }
        res.status(200).json({
            success: true,
            message: ("gallery create successfully"),
            data: { gallery }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
const listGallery = async (req, res) => {
    try {
        const reqBody = req.body;
        const gallery = await galleryService.listGallery(reqBody);
        if (!gallery) {
            throw new Error("gallery not found!");
        }
        res.status(200).json({
            success: true,
            message: ("gallery list successfully"),
            data: { gallery }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteGallery = async (req, res) => {
    try {
        const id = req.params.Id;
        const gallery = await galleryService.listGallery();
        if (!gallery) {
            throw new Error("gallery not found!");
        }
        await galleryService.deleteGallery(id)
        res.status(200).json({
            success: true,
            message: ("gallery delete successfully"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updateGallery = async (req, res) => {
    try {
        const id = req.params.galleryId;
        const gallery = await galleryService.getGalleryById(id);
        if (!gallery) {
            throw new Error("gallery not found!");
        }
        await galleryService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("gallery update successfully"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createGallery,
    listGallery,
    deleteGallery,
    updateGallery
}