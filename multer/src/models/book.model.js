const mongoose = require("mongoose")
const config = require("../config/config")
const bookSchema = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
        },
        book_desc: {
            type: String,
            trim: true,
        },
        book_condition: {
            type: String,
            trim: true,
        },
        book_price: {
            type: String,
            trim: true,
        },
        book_pages: {
            type: String,
            trim: true,
        },
        image: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "stationary"
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                data.image = `${config.base_url}images/${data.image}`;
            }
        }
    }
)

const Book = mongoose.model("book", bookSchema)
module.exports = Book;