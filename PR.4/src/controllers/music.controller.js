const { musicService } = require("../services");

/** create music*/
const createMusic = async (req, res) => {
    try {
        const reqBody = req.body;

        const music = await musicService.createMusic(reqBody);
        if (!music) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "music create successfully!",
            data: { music },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** list music*/
const listMusic = async (req, res) => {
    try {
        const reqBody = req.body;

        const music = await musicService.listMusic(reqBody);
        if (!music) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "music list successfully!",
            data: { music },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** delete music*/
const deleteMusic = async (req, res) => {
    try {
        const id = req.params.Id
        const music = await musicService.listMusic();
        if (!music) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await musicService.deleteMusic(id)
        res.status(200).json({
            success: true,
            message: "music list successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateMusic = async (req, res) => {
    try {
        const id = req.params.Id;

        const musicExists = await musicService.getMusicById(id);
        if (!musicExists) {
            throw new Error("music not found!");
        }
await musicService.updateDetails(id,req.body);
        res.status(200).json({
            success: true,
            message: "music details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


module.exports = {
    createMusic,
    listMusic,
    deleteMusic,
    updateMusic
}