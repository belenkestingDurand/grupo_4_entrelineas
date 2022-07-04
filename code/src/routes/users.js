// routes/user.js
const express = require('express');

const router = express.Router();

// CONTROLLER
const userCtrl = require('../controllers/userController');

//Middlewares
const upload = require('../middlewares/multerM');
const valRegM = require('../middlewares/valRegM');
const valLogM = require('../middlewares/valLogM');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

router.get('/login',guestMiddleware, userCtrl.showLogin)
router.post('/login',valLogM,userCtrl.login)

router.get('/register',guestMiddleware, userCtrl.showRegister)
router.post('/register',upload.single('img'),valRegM,userCtrl.register)

//Perfil de Usuario
router.get('/userProfile',authMiddleware ,userCtrl.profile)

//Logout
router.get('/logout', userCtrl.logout)
// exports
module.exports = router