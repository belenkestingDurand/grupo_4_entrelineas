// LUGAR PARA FUTURAS BASES DE DATOS
const about = {
                books: "Libros"
                }
const db = require('../database/models');
const sequelize = require('sequelize')
const fs = require("fs")
let datos = fs.readFileSync('./data/products.json')
        

// OBJECT WITH DETAILED HTML DIRECTIONS
const homeController =  {
    //'home.ejs' IN 'views/products' FOLDER
    home: (req, res) => {

     db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"] })
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
        db.Product.findByPk(req.params.bookId)
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