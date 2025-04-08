const { Schema, model } = require("mongoose");
const Decimal128 = require('mongodb').Decimal128;

const bookSchema = new Schema({
    bookId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Decimal128,
        required: true,
    },
    publishedDate: {
        type: Date,
        required: true,
    }
}, {timestamps: true});

const Book = model("book", bookSchema);

module.exports = Book;