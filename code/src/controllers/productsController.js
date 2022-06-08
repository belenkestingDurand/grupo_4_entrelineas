// LUGAR PARA FUTURAS BASES DE DATOS
const about = {
    books: "Libros"
    }
const fs = require("fs")

// OBJECT WITH DETAILED HTML DIRECTIONS
const productsController =  {
    //'crearProducto.ejs' IN 'views/products' FOLDER
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
    let datos = fs.readFileSync('./data/products.json')
    let books = JSON.parse(datos)
    res.render('products/editarProducto', {product: books[0]})
    },

    // /products (POST)
    productCreated: (req,res) =>{
        let datos = fs.readFileSync('./data/products.json')
        let books = JSON.parse(datos)
        let createdProduct = {
            
        }

        
        res.redirect('/')
    }

}

// exports
module.exports = productsController