const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const authorsController = {
    crear : function (req, res) {
        res.render("crearAutores")
    },
    search: function(req, res){
        //db.Movie.findOne({where: {title: {[Op.like]:'%'+req.body.titulo+'%'} }})
        db.Author.findAll({
                             where: {fullName: {[Op.like]:'%'+req.body.search+'%'} }})
        .then((autores) => {

        res.render("listadoAutores", { autores: autores });
        });
      },
      procesarCrear: function(req,res) {
        db.Author.create({
           fullName: req.body.fullName 
        });
        
      },
      listar: function(req, res) {
        db.Author.findAll()
          .then(function(autores) {
            res.render('listadoAutores', {autores})
          })
      }
}
module.exports = authorsController;