const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/authentication');

router.use('/auth', require('./auth/authRoutes'));

router.use('/book', authMiddleware, require('./book/bookRoutes'));

module.exports = router;