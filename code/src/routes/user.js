// routes/user.js
const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
// CONTROLLER
const userCtrl = require('../controllers/userController')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let folder = path.join(__dirname, '../../public/img/users');
      cb(null, folder);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
    const upload = multer ({storage})
router.get('/login',userCtrl.showLogin)
router.post('/login',userCtrl.login)

router.get('/register',userCtrl.showRegister)
router.post('/register',upload.single('img'),userCtrl.register)

// exports
module.exports = router