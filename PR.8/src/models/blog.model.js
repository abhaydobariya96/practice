const mongoose = require("mongoose");
const config = require("../config/config");

const bookSchema = new mongoose.Schema({
    Image: {
        type: String,
    },
    Blog_Logo: {
        type: String,
    },
    Date: {
        type: String,
        trim: true
    },
    Title: {
        type: String,
        trim: true
    },
    Tag: {
        type: String,
        trim: true
    },
    Desc: {
        type: String,
        trim: true
    },
    Author: {
        type: String,
        trim: true
    },
    Comments: {
        type: String,
        trim: true
    },
    Position: {
        type: String,
        trim: true
    }
},
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.Image) {
                    data.Image = `${config.base_url}images/${data.Image}`;
                }
            },
        },
    });

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;