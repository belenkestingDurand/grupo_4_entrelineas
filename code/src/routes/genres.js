var express = require('express');
var router = express.Router();
var genresController = require("../controllers/genresController");

//Middlewares

const valGenre = require('../middlewares/valGenre');

// Create genre
router.get('/crear', genresController.crear);
router.post('/crear',valGenre, genresController.procesarCrear);

// List genre
router.get('/',genresController.listar);


// Edit genres
router.get('/edit/:id', genresController.edit);
router.post('/update/:id',valGenre, genresController.update);


// Delete genre
router.get('/delete/:id', genresController.delete);
router.post('/destroy/:id', genresController.destroy);

// Search genre
router.post('/search', genresController.search)

module.exports = router;