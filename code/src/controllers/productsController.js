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
    let product = books.find(product => product.id == req.params.id)
    res.render('products/editarProducto', {product: product})
    },
    
    productoEditado:(req,res) => {
        let books = JSON.parse(datos)

        req.body.id = req.params.id;
        // req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let booksUpdate = books.map((libro) => {
            if (libro.id == req.body.id) {
                return (libro = req.body);
            }
            return libro;
        })
        let booksActualizar = JSON.stringify(booksUpdate, null, 2);
        
        // redireccionar a '/productos'
        fs.writeFileSync(datos,booksActualizar)
        res.redirect('/products')
        },
    

    // /products proceso de creación por (POST)
    productoCreado: (req,res) =>{
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