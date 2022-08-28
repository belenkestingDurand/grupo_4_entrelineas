const {validationResult} = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const editorialsController = {
  search:  function(req, res){
    
     db.Editorial.findAll({
                         where: {title: {[Op.like]:'%'+req.body.search+'%'} }})
    .then((editoriales) => {

    res.render("listadoEditoriales", { editoriales: editoriales });
    });
  },
    crear : function (req, res) {
        res.render("crearEditoriales")
    },
    
    procesarCrear: async function(req,res) {
      const resultValidation = validationResult(req);

      if (resultValidation.errors.length> 0) {
        return res.render("crearEditoriales", {
          errors: resultValidation.mapped(),
          oldData: req.body
        });

        }
      await db.Editorial.create({
           title: req.body.title
        });
        res.redirect('/editorials');
        
        
      },
      listar: function(req, res) {
        db.Editorial.findAll({
          order : [
            ["title", "ASC"]
          ]
        })
          .then(function(editoriales) {
            res.render('listadoEditoriales', {editoriales})
          })
      },
      delete: function(req, res){
        let editorialId = req.params.id
        db.Editorial.findByPk(editorialId)
          .then(Editorial =>{
            console.log(Editorial)
            return res.render('../views/editorialsDelete',{Editorial})
          })
      },
      destroy: async function(req, res) {
        await db.Editorial.destroy({
          where: {
            id : req.params.id
            }
        })
         res.redirect('/editorials');
      
        
      }
}
module.exports = editorialsController;