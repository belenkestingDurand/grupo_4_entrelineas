// LUGAR PARA FUTURAS BASES DE DATOS
const about = {
                books: "Libros"
                }
const fs = require("fs")
let datos = fs.readFileSync('./data/products.json')
        

// OBJECT WITH DETAILED HTML DIRECTIONS
const homeController =  {
    //'home.ejs' IN 'views/products' FOLDER
    home: (req, res) => {
        let books = JSON.parse(datos)
        return res.render('products/home',{books: books})
    },
    //'detalleDeProducto.ejs' IN 'views/products' FOLDER
    detalle: (req,res) => {
        let books = JSON.parse(datos)
        let product = books.find(product => product.id == req.params.bookId)
        res.render('products/detalleDeProducto',{product: product})
    },

    //'carritoDeCompras.ejs' IN 'views/prodcuts' FOLDER
    carrito: (req,res) => {
        res.render('products/carritoDeCompras')
    },
    /*-
    // 'crearProducto.ejs' IN 'views/products' FOLDER
    crearProducto: (req, res) => {
        res.render('products/crearProducto')
    },
     //'listarProducto.ejs' IN 'views/products' FOLDER
     listarProducto: (req, res) => {
        let datos = fs.readFileSync('./data/products.json')
        let books = JSON.parse(datos)
        res.render('products/listarProducto',{about: about, books: books})
    },
    editarProducto: (req,res) => {
        // let prodEditar = req.params.id
        // let product = books[prodEditar]
        let datos = fs.readFileSync('./data/products.json')
        let books = JSON.parse(datos)
        res.render('products/editarProducto', {product: books[0]})
    } 
    */
    login: (req, res) => {
        res.render('users/login')
    },
    //'register.ejs' IN 'views/users' FOLDER
    register: (req, res) => {
        res.render('users/register')
    },
}

// exports
module.exports = homeController