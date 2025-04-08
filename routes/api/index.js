const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth/authRoutes'));

router.use('/book', require('./book/bookRoutes'));

module.exports = router;