const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const genresController = {
  search: function(req, res){
    
    db.Genre.findAll({
                         where: {name: {[Op.like]:'%'+req.body.search+'%'} }})
    .then((generos) => {

    res.render("listadoGeneros", { generos: generos });
    });
  },
    crear : function (req, res) {
        res.render("crearGeneros")
    },
    
    procesarCrear: async function(req,res) {
        await db.Genre.create({
           name: req.body.name
        });
        res.redirect('/genres');
        
        
      },
      listar: function(req, res) {
        db.Genre.findAll({
          order : [
            ["name", "ASC"]
          ]
        })
          .then(function(generos) {
            res.render('listadoGeneros', {generos})
          })
      },
      delete: function(req, res){
        let genreId = req.params.id
        db.Genre.findByPk(genreId)
          .then(genero =>{
            console.log(genero)
            return res.render('../views/genresDelete',{genero})
          })
      },
      destroy: async function(req, res) {
        await db.Genre.destroy({
          where: {
            id : req.params.id
            }
        });
         res.redirect('/genres');
      
        
      }
}
module.exports = genresController;