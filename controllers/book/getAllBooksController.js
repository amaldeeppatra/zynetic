const Book = require('../../models/book');

async function getAllBooksHandler(req, res){
    try{
        const books = await Book.find({});
        if(!books || books.length === 0){
            return res.status(404).json({message: "No books found"});
        }
        return res.status(200).json({ success: true, books });
    }
    catch (error){
        return res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = getAllBooksHandler;