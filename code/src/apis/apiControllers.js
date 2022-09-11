const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const apiController = {
    listarProductos: function(req, res){
          //db.Movie.findOne({where: {title: {[Op.like]:'%'+req.body.titulo+'%'} }})
    db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"]})
    .then((productos) => {
    res.send(productos);
    });
    },

    infoDeSession: function(req, res){
        if(req.session.userLogged){
            db.User.findOne({where: {id: req.session.userLogged.id}})
            .then(function(data){
                res.send(data)
            })   
        }
        else{
            let data = {id: null,
                        firstName: null,
                        lastName: null,
                        email: null}
            res.send(data)
        }
            
    }
}

module.exports = apiController