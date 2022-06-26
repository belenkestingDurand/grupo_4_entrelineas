const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let folder = path.join(__dirname, '../../public/img/products');
      cb(null, folder);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
    const uploadProd = multer ({storage})

    module.exports = uploadProd;