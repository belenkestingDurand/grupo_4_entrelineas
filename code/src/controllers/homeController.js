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
    }
}

// exports
module.exports = homeController