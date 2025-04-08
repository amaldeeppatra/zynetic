const express = require('express');
const router = express.Router();
const signupHandler = require('../../../controllers/auth/signupController');
const loginHandler = require('../../../controllers/auth/loginController');

router.get('/', (req, res) => {
    res.send('Auth route is working!');
});

router.post('/signup', signupHandler);

router.post('/login', loginHandler);

module.exports = router;