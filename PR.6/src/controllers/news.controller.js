const { newsService } = require("../services")

const createNews = async (req, res) => {
    try {
        const reqBody = req.body;
        const news = await newsService.createNews(reqBody);
        if (!news) {
            throw new Error("news not found!");
        }
        res.status(200).json({
            success: true,
            message: ("news create successfully"),
            data: { news }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
const listNews = async (req, res) => {
    try {
        const reqBody = req.body;
        const news = await newsService.listNews(reqBody);
        if (!news) {
            throw new Error("news not found!");
        }
        res.status(200).json({
            success: true,
            message: ("news list successfully"),
            data: { news }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteNews = async (req, res) => {
    try {
        const id = req.params.Id;
        const news = await newsService.listNews();
        if (!news) {
            throw new Error("news not found!");
        }
        await newsService.deleteNews(id)
        res.status(200).json({
            success: true,
            message: ("news delete successfully"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updateNews = async (req, res) => {
    try {
        const id = req.params.newsId;
        const newsEx = await newsService.getNewsById(id);
        if (!newsEx) {
            throw new Error("news not found!");
        }
        const news = await newsService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("news update successfully"),
            data: { news }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {
    createNews,
    listNews,
    deleteNews,
    updateNews
}