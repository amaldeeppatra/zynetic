const Book = require('../../models/book');

async function updateBookHandler(req, res){
    try{
        const { bookId } = req.params;
        const { title, author, category, price, rating } = req.body;

        const updatedBook = await Book.findOneAndUpdate(
            { bookId },
            { title, author, category, price, rating },
            { new: true } // Return the updated document
        );
        if(!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book updated successfully', updatedBook });
    }
    catch (error){
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports = updateBookHandler;