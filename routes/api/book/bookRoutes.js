const express = require('express');
const router = express.Router();
const createBookHandler = require('../../../controllers/book/createBookController');
const getAllBooksHandler = require('../../../controllers/book/getAllBooksController');
const getBookByIdHandler = require('../../../controllers/book/getBookByIdController');
const updateBookHandler = require('../../../controllers/book/updateBookByIdController');
const deleteBookHandler = require('../../../controllers/book/deleteBookByIdController');

router.get('/', (req, res) => {
    res.send('Welcome to the Book API');
});

router.post('/create', createBookHandler);

router.get('/getAll', getAllBooksHandler);

router.get('/id/:bookId', getBookByIdHandler);

router.put('/update/:bookId', updateBookHandler);

router.delete('/delete/:bookId', deleteBookHandler);

module.exports = router;