var express = require('express');
var router = express.Router();
var authorsController = require("../controllers/authorsController");


//Middlewares

const valAuthor = require('../middlewares/valAuthor');

// Create author
router.get('/crear', authorsController.crear);
router.post('/crear', valAuthor, authorsController.procesarCrear);

// List author
router.get('/',authorsController.listar);

// Delete author
router.get('/delete/:id', authorsController.delete);
router.post('/destroy/:id', authorsController.destroy);

// Search author
router.post('/search', authorsController.search);

// Edit author
router.get('/edit/:id', authorsController.edit);
router.post('/update/:id',valAuthor, authorsController.update);

module.exports = router;