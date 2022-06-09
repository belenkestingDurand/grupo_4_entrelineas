// LUGAR PARA FUTURAS BASES DE DATOS
const about = {
    books: "Libros"
    }
const fs = require("fs")


// OBJECT WITH DETAILED HTML DIRECTIONS
const productsController =  {
    //'crearProducto.ejs' IN 'views/products' FOLDER
    crearProducto: (req, res) => {
    return res.redirect('/create')
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

    // /products proceso de creación por (POST)
    productCreated: (req,res) =>{
        let datos = fs.readFileSync('./data/products.json')
        let books = JSON.parse(datos)

        let newProduct = {
            id: books[books.length -1].id + 1,
            name: req.body.name,
            type: req.body.type,
            author: req.body.author,
            price: req.body.price,
            gender: req.body.gender,
            //! MULTER
            picture: '',
            opinion: req.body.opinion,
            size: req.body.size,
            pages: req.body.pages,
            more: req.body.more
        };
        books.push(newProduct)

        let booksWithNewProduct = JSON.stringify(books, null, 2)
        fs.writeFileSync(datos, booksWithNewProduct, "utf-8")
        
        return res.redirect('/')
    },
    delete: (req, res) => {
        // leer archivo
        let datos = fs.readFileSync('./data/products.json')
        let books = JSON.parse(datos)
        // ubicar el libro a borrar y hacer un array con el resto mediante filter
        let id = req.params.id;
        let booksToKeep = books.filter((book) => book.id !=id);
        //lo vuelvo a formato json
        let jsonBooksToKeep = JSON.stringify(booksToKeep, null, 4);
        // lo reescribo en el archivo
        fs.writeFileSync(datos, jsonBooksToKeep, "utf-8");
        //redirecciona a listado de libros
        return res.redirect('/');

    }

}

// exports
module.exports = productsController