// LUGAR PARA FUTURAS BASES DE DATOS
const about = {
                books: "Libros"
                }
const db = require('../database/models');
const sequelize = require('sequelize')
const fs = require("fs")
//let datos = fs.readFileSync('./data/products.json')
        

// OBJECT WITH DETAILED HTML DIRECTIONS
const homeController =  {
    //'home.ejs' IN 'views/products' FOLDER
    home: (req, res) => {

     db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"], 
                          order: [["name", "ASC"]] })
     .then((productos) => {
        res.render('products/home',{books: productos})
     });  
     
    },

    listarLibros: function(req,res){
        db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"],
                             where: {id_productType: 1 }
                          })
     .then((productos) => {
        res.render('products/home',{books: productos})
     });  
    },

    listarEbooks: function(req,res){
        db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"],
                             where: {id_productType: 2 }
                          })
     .then((productos) => {
        res.render('products/home',{books: productos})
     });  
    },

    listarMerch: function(req,res){
        db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"],
                             where: {id_productType: 3 }
                          })
     .then((productos) => {
        res.render('products/home',{books: productos})
     });  
    },

    //'detalleDeProducto.ejs' IN 'views/products' FOLDER
    detalle: (req,res) => {
        /* //* VERSION ANTERIOR
        let books = JSON.parse(datos) 
        let product = books.find(product => product.id == req.params.bookId) 
        res.render('products/detalleDeProducto',{product: product})  
        */
        db.Product.findOne({include: ["authors",'genres'],
                            where: {id:req.params.bookId}})
            .then( resultado => {
                res.render('products/detalleDeProducto',{product: resultado})
            })
    },

    //'carritoDeCompras.ejs' IN 'views/prodcuts' FOLDER
    carrito: (req,res) => {
        res.render('products/carritoDeCompras')
    }
}

// exports
module.exports = homeController