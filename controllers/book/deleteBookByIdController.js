const Book = require('../../models/book');

async function deleteBookHandler(req, res){
    try{
        const { bookId } = req.params;
        const deletedBook = await Book.findOneAndDelete({ bookId });
        if(!deletedBook){
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book deleted successfully", deletedBook });
    }
    catch(error){
        return res.status(500).json({ message: error.message });
    }
}

module.exports = deleteBookHandler;