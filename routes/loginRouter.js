const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/', loginController.loginPage);

router.get('/registrar', loginController.registerPage);

module.exports = router;