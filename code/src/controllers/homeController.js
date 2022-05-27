// LUGAR PARA FUTURAS BASES DE DATOS


// OBJECT WITH DETAILED HTML DIRECTIONS
const homeController =  {
    //'home.ejs' IN 'views/products' FOLDER
    home: (req, res) => {
        res.render('products/home')
    },
    //'detalleDeProducto.ejs' IN 'views/products' FOLDER
    detalle: (req,res) => {
        res.render('products/detalleDeProducto')
    },
    //'carritoDeCompras.ejs' IN 'views/prodcuts' FOLDER
    carrito: (req,res) => {
        res.render('products/carritoDeCompras')
    },
    //'crearProducto.ejs' IN 'views/products' FOLDER
    crearProducto: (req, res) => {
        res.render('products/crearProducto')
    },
     //'listarProducto.ejs' IN 'views/products' FOLDER
     listarProducto: (req, res) => {
        res.render('products/listarProducto')
    }
}

// exports
module.exports = homeController