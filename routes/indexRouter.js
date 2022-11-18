const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/', indexController.renderPage)
router.get('/cadastro', indexController.renderCadastro)


module.exports = router