const Book = require('../../models/book');
const { Decimal128 } = require('mongodb');

async function getAllBooksHandler(req, res){
    try{
        const { author, category, rating, title } = req.query;

        // for filtering by author, category, and rating
        const filter = {};
        if (author) {
            filter.author = author;
        }
        if (category) {
            filter.category = category;
        }
        if (rating) {
            filter.rating = Decimal128.fromString(rating.toString());
        }

        // for searching by title - partial search
        if (title) {
            filter.title = { $regex: title, $options: 'i' };
        }

        const books = await Book.find(filter);

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