const Book = require('../../models/book');

async function getBookByIdHandler(req, res) {
    try {
        const { bookId } = req.params;
        const book = await Book.findOne({ bookId });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ success: true, book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getBookByIdHandler;