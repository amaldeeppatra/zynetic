const Book = require('../../models/book');

async function createBookHandler(req, res){
    try{
        const { bookId, title, author, category, price, rating, publishedDate } = req.body;
        
        // check if any missing entries
        if(!title || !author || !category || !price || !rating || !publishedDate){
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        // check if book already exists
        const existingBook = await Book.findOne({ title });
        if (existingBook) {
            return res.status(400).json({ message: 'Book already exists' });
        }

        const newBook = new Book({
            bookId,
            title,
            author,
            category,
            price,
            rating,
            publishedDate
        });
        
        await newBook.save();

        res.status(201).json({ success: true, message: 'Book created successfully', book: newBook });
    }
    catch (error){
        res.status(500).json({ message: false, error: error.message });
    }
}

module.exports = createBookHandler;