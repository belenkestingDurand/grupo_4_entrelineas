// LUGAR PARA FUTURAS BASES DE DATOS
const about = {
    books: "Libros"
    }
const fs = require("fs")

let datos = fs.readFileSync('./data/products.json')

// OBJECT WITH DETAILED HTML DIRECTIONS
const productsController =  {
    crearProducto: (req, res) => {
    return res.render('products/crearProducto')
    },

    listarProducto: (req, res) => {
    let books = JSON.parse(datos)
    res.render('products/listarProducto',{about: about, books: books})
    },

    editarProducto: (req,res) => {
    let books = JSON.parse(datos)
    // let product = books.find(product => product.id == req.params.bookId)
    res.render('products/editarProducto', {product: books[0]})
    },
    
    /*
    productoEditado:(req,res) => {
        recibir por req.body
        meter en obejto lireal temporario
        recorrer el array y cuando se encuentre el ID que matchea actualizar datos
        redireccionar a '/'
    }
    */

    // /products proceso de creación por (POST)
    productCreated: (req,res) =>{
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
        console.log(id);
        let booksToKeep = books.filter((book) => book.id !=id);
        console.log(bookToKeep);
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