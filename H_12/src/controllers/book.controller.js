const { bookService } = require("../services");

/** create book */
const createBook = async (req, res) => {
    try {
        const reqBody = req.body;

        const book = await bookService.createBook(reqBody);
        if (!book) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Book create successfully!",
            data: { book },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


/** LIST book */
const listBook = async (req, res) => {
    try {
        const reqBody = req.body;

        const book = await bookService.listBook(reqBody);
        if (!book) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Book list successfully!",
            data: { book },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** DELETE book */
const deleteBook = async (req, res) => {
    try {
        const id = req.params.Id
        const book = await bookService.listBook()

        if (!book) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await bookService.deleteBook(id);

        res.status(200).json({
            success: true,
            message: "Book delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** update book */
const updateBook             = async (req, res) => {
    try {
        const id = req.params.bookId

        const bookExists = await bookService.getBookById(id)
        if (!bookExists) {
            throw new Error("Book not found!");
        }
        await bookService.updateDetails(id, req.body);

        res.status(200).json({
            success: true,
            message: "Book details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { createBook, listBook, deleteBook, updateBook };
