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
    }
}

// exports
module.exports = homeController