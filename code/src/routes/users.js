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

router.get('/login',guestMiddleware, userCtrl.showLogin)
router.post('/login',valLogM,userCtrl.login)

router.get('/register',guestMiddleware, userCtrl.showRegister)
router.post('/register',upload.single('img'),valRegM,userCtrl.register)

router.get('/userProfile',authMiddleware ,userCtrl.profile)
// exports
module.exports = router