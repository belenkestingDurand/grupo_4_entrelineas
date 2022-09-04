const {validationResult} = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const authorsController = {
  search: function(req, res){
    
    db.Author.findAll({
                         where: {fullName: {[Op.like]:'%'+req.body.search+'%'} }})
    .then((autores) => {

    res.render("listadoAutores", { autores: autores });
    });
  },
    crear : function (req, res) {
        res.render("crearAutores")
    },
    edit: function (req, res) {
      db.Author.findByPk(req.params.id)
        .then((autor) => {
            res.render("editarAutor", {autor : autor})
        })

    },
    update: function (req, res) {
      console.log(req.params.id)
      const resultValidation = validationResult(req);

      if (resultValidation.errors.length> 0) {
        return res.render("editarAutor", {
          errors: resultValidation.mapped(),
          oldData: req.body
        });

        }
        db.Author.update({
          fullName: req.body.fullName 
       }, {
            where: {
              id: req. params.id
            }
       })
       .then(resultados => {
          res.redirect('/authors');


    })
  },
    
    procesarCrear: async function(req,res) {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length> 0) {
          return res.render("crearAutores", {
            errors: resultValidation.mapped(),
            oldData: req.body
          });

          }
          await db.Author.create({
            fullName: req.body.fullName 
         });
         res.redirect('/authors');

        },
       
        
        
      
      listar: function(req, res) {
        db.Author.findAll({
          order : [
            ["fullName", "ASC"]
          ]
        })
          .then(function(autores) {
            res.render('listadoAutores', {autores})
          })
      },
      delete: function(req, res){
        let autorId = req.params.id
        db.Author.findByPk(autorId)
          .then(Autor =>{
            console.log(Autor)
            return res.render('../views/authorsDelete',{Autor})
          })
      },
      destroy: async function(req, res) {
        await db.Author.destroy({
          where: {
            id : req.params.id
            }
        });
         res.redirect('/authors');
      
        
      }
}
module.exports = authorsController;