// LUGAR PARA FUTURAS BASES DE DATOS
const about = {
                books: "Libros"
                }
const books = [{
              id: 1,
              type: 'Libro',
              name: "La Cabeza de Macri",
              gender:"Biografía",
              author: "Franco Linder",
              price: "$4000.00",
              picture: "/img/book-la-cabeza-de-macri.webp",
              opinion: "Este es un libro ... que tiene ... muy interesante..."},

              {
              id: 2,
              name: "Matar un Ruiseñor",
              author: "Harper Lee",
              price: "$3260.00",
              picture: "/img/book-matar-a-un-ruisenior.webp"},

              {
              id: 3,
              name: "Red Queen",
              author: "Victoria Avyard",
              price: "$2600.00",
              picture: "/img/book-red-queen.webp"},

              {
              id: 4,
              name: "Harry Potter",
              author: "J.K.Rowling",
              price: "$5200.00",
              picture: "/img/book-harry-potter.jpeg"},

              {
              id: 5,
              name: "Las Vidas dentro De tu cabeza",
              author: "Franco Linder",
              price: "$5400.00",
              picture: "/img/book-las-vidas-dentro-de-tu-cabeza.webp"},

              {
              id: 6,
              name: "El Buen Cirujano",
              author: "Ricardo Garcia",
              price: "$7200.00",
              picture: "/img/book-el-buen-cirujano.webp"},
              
            ]

// OBJECT WITH DETAILED HTML DIRECTIONS
const homeController =  {
    //'home.ejs' IN 'views/products' FOLDER
    home: (req, res) => {
        res.render('products/home',{about: about, books: books})
    },
    //'detalleDeProducto.ejs' IN 'views/products' FOLDER
    detalle: (req,res) => {
        let product = books.find(product => product.id == req.params.bookId)
        console.log(product)
        res.render('products/detalleDeProducto',{product: product})
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
        res.render('products/listarProducto',{about: about, books: books})
    }
}

// exports
module.exports = homeController