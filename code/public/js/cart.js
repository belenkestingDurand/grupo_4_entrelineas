window.addEventListener('load', function(){
//Declaro los botones y elementos de html
    let button_borrar = document.querySelector('.carrito-botton-style-borrar')
    let p = document.querySelector(".products-in-cart")
    let section = document.querySelector(".carrito-section")
    let boton_restar = document.querySelectorAll(".boton-restar")
    let boton_agregar = document.querySelectorAll(".boton-agregar")
    
//Si existe el carrito en localStorage
   if(localStorage.carrito){
    //Hago una llamada a la api que me trae todos los productos de la base
    fetch('http://localhost:3000/api/showCart')
    .then (function (resp){
       resp.json()

       .then(function(data){
            let carrito = JSON.parse(localStorage.carrito)
            console.log(carrito)
            //Una vez que tengo la data, busco cuales de todos los productos los tengo en el carrito y los guardo en un array
            let productos_mostrar = data.filter(function(productos){
                                    return (carrito.findIndex(function(item){return item.id == productos.id})) != -1

                                })
            //Itero soble el array con los productos del carrito para generar el HTML y mostrar los productos
            productos_mostrar.forEach(function(product){
                //Para sacar la cantidad de productos que tengo en el carrito busco donde está el producto que estamos
                //pro imprimir dentro de la variable carrito para obtener el quantity

                let index = carrito.findIndex(function(prod){
                    return prod.id == product.id
                     })

                //Calculo el precio para poder mostrar el precio segun la cantidad de productos que tengo en el carrito
                let price = product.price * carrito[index].quantity
                
                section.innerHTML += 
            "<article class='carrito-flex-box carrito-flex-direction-row carrito-margin-article carrito-sizing-article carrito-bottom-border'>"
            + "<div class='sizing-div-img-libro'><img src=" + product.picture + " alt='Foto del producto'></div>"
            + "<div class='carrito-flex-box flex-direction-column carrito-sizing-div carrito-flex-align carrito-flex-row-dektop' >"
                + "<div class='sizing-div-nombreDelLibro carrito-align-text-center carrito-desktop-diseño carrito-text-align-desktop'><h5 class='carrito-margin-NombreDelLibro'>"+ product.name +"</h5></div>"
                  + "<div class='carrito-flex-column-dektop'>"
                        + "<div class='carrito-flex-box carrito-flex-direction-row carrito-sizing-div-textos carrito-text-justify-center'>"
                            +"<div class='carrito-border carrito-border-left carrito-recuadro-sizing carrito-align-text-center boton-restar'><h6 class='carrito-margin-textos carrito-font-color'>-</h6></div>"
                            +"<div class='carrito-border carrito-border-left carrito-border-right carrito-recuadro-sizing carrito-align-text-center'><h6 class='carrito-margin-textos'>"+carrito[index].quantity+"</h6></div>"
                            +"<div class='carrito-border carrito-border-right carrito-recuadro-sizing carrito-align-text-center boton-agregar'><h6 class='carrito-margin-textos carrito-font-color'>+</h6></div>"
                        +"</div>"
                        +"<div><h5 class='desktop-margin-precio'>"+price+"</h5></div>"
                    +"</div>"
                 +"</div>"    
           +"</article>"
            })
                
            });
            
       }) 
    }
    //Si localStoreage no existe entonces limpio el carrito y muestro el mensaje
    else{
        section.innerHTML = "<div class='no-product-cart'><p>" + "No sumate nada en el carrito aun :(" + "</p></div>"
    }

    //Escuchamos el click en el boton borrar
       button_borrar.addEventListener('click',function(){
        //Borramos la variable localStorage
        localStorage.removeItem('carrito')
        //Reseteamos la cuenta del carrito
        p.innerHTML = 0
        //Ponemos en cero el carrito
        section.innerHTML = "<div class='no-product-cart'><p>" + "No sumate nada en el carrito aun :(" + "</p></div>"
        })
        
        
   })
    


   

