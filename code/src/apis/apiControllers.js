const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const apiController = {
    listar: function(req, res){
          //db.Movie.findOne({where: {title: {[Op.like]:'%'+req.body.titulo+'%'} }})
    db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"]})
    .then((productos) => {
    res.send(productos);
});
    }
}

module.exports = apiController