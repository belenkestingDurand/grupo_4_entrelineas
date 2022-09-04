const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const path = require('path');
const routesMain = require('./routes/home');
const routesProducts = require('./routes/products');
const routesUsers = require('./routes/users');
const routesAuthors = require('./routes/authors');
const routesEditorials = require('./routes/editorials');
const routesGenres = require('./routes/genres');



const publicPath = path.resolve(__dirname,'../public');
const methodOverride = require('method-override')

//middleware de a nivel de app para chequear usuario logueado
const userLoggedMiddleware = require('./middlewares/userLogedMiddleware');
const recodameMiddleware = require('./middlewares/rememberme');


// middleware de session
app.use(session({ 
    secret: 'Secreto',
    resave: false,
    saveUninitialized: false,
}));


//public
    
    app.use(express.static(publicPath));



//Definir las rutas
app.listen(process.env.PORT || port, () => console.log('Example app listening at http://localhost:'+port))

// EJS incorporado + direccion de carpeta viewws
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

// para implementar metodo HTTP: Post
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(userLoggedMiddleware);
app.use(recodameMiddleware);


// para implementar metodos HTTP: Put & Delete

app.use(methodOverride('_method'))

//- ROUTES FOLDER


app.use('/', routesMain)
app.use('/products', routesProducts)
app.use('/users', routesUsers)
app.use('/authors', routesAuthors)
app.use('/editorials', routesEditorials)
app.use('/genres', routesGenres)

