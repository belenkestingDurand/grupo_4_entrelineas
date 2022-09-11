window.addEventListener('load', function(){
    //Declaro los botones y elementos de html
        let button_borrar = document.querySelector('.carrito-botton-style-borrar')
        let p = document.querySelector(".products-in-cart")
        let section = document.querySelector(".carrito-section")
        let boton_restar = document.querySelectorAll(".boton-restar")
        let boton_agregar = document.querySelectorAll(".boton-agregar")
        let ir_a_pagar = document.querySelector('.boton-ir-a-pagar')
    
        var total_a_pagar = 0
        
    //Si existe el carrito en localStorage
       if(localStorage.carrito){
        //Hago una llamada a la api que me trae todos los productos de la base
        fetch('http://localhost:3000/api/showCart')
        .then (function (resp){
           resp.json()
    
           .then(function(data){
                let carrito = JSON.parse(localStorage.carrito)
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
                    total_a_pagar += price
                    ir_a_pagar.innerHTML = 'Subtotal $' + total_a_pagar
                    
                    section.innerHTML += 
                "<article class='carrito-flex-box carrito-flex-direction-row carrito-margin-article carrito-sizing-article carrito-bottom-border'>"
                + "<div class='sizing-div-img-libro'><img src=" + product.picture + " alt='Foto del producto'></div>"
                + "<div class='carrito-flex-box flex-direction-column carrito-sizing-div carrito-flex-align carrito-flex-row-dektop' >"
                    + "<div class='sizing-div-nombreDelLibro carrito-align-text-center carrito-desktop-diseño carrito-text-align-desktop'><h5 class='carrito-margin-NombreDelLibro'>"+ product.name +"</h5></div>"
                      + "<div class='carrito-flex-column-dektop'>"
                            + "<div class='carrito-flex-box carrito-flex-direction-row carrito-sizing-div-textos carrito-text-justify-center'>"
                                +"<div class='carrito-border carrito-border-left carrito-recuadro-sizing carrito-align-text-center boton-restar'><h6 class='carrito-margin-textos carrito-font-color' data-id='"+product.id+"'>-</h6></div>"
                                +"<div class='carrito-border carrito-border-left carrito-border-right carrito-recuadro-sizing carrito-align-text-center'><h6 class='carrito-margin-textos'>"+carrito[index].quantity+"</h6></div>"
                                +"<div class='carrito-border carrito-border-right carrito-recuadro-sizing carrito-align-text-center boton-agregar'><h6 class='carrito-margin-textos carrito-font-color' data-id='"+product.id+"'>+</h6></div>"
                            +"</div>"
                            +"<div><h5 class='desktop-margin-precio'>"+price+"</h5></div>"
                        +"</div>"
                     +"</div>"    
               +"</article>"
                })
    
                let boton_restar = document.querySelectorAll(".boton-restar")
                    boton_restar.forEach(function(boton){
    
                    })
                //Declaro el boton de agregar + productos al carrito
                let boton_agregar = document.querySelectorAll(".boton-agregar")
                    boton_agregar.forEach(function(boton){
                        boton.addEventListener('click',function(event){
                            //Traigo el carrito en local storage
                            let carrito = JSON.parse(localStorage.carrito)
    
                            //Busco el elemento en el carrito
                            let index = carrito.findIndex(function(prod){
                                return prod.id == event.target.dataset.id
                            })
                            //Busco el elemento del carrito y le sumo 1 a la cantidad
                            carrito[index].quantity = carrito[index].quantity + 1
                            localStorage.setItem('carrito', JSON.stringify(carrito))
                            location. reload()
    
                        })
                    })
                    
                });
                
           }) 
        }
        //Si localStoreage no existe entonces limpio el carrito y muestro el mensaje
        else{
            section.innerHTML = "<div class='no-product-cart'><p>" + "No sumaste nada en el carrito aun :(" + "</p></div>"
            ir_a_pagar.innerHTML = 'Subtotal $' + 0
        }
    
        //Escuchamos el click en el boton borrar
           button_borrar.addEventListener('click',function(){
            //Borramos la variable localStorage
            localStorage.removeItem('carrito')
            //Reseteamos la cuenta del carrito
            p.innerHTML = 0
            //Ponemos en cero el carrito
            section.innerHTML = "<div class='no-product-cart'><p>" + "No sumaste nada en el carrito aun :(" + "</p></div>"
            ir_a_pagar.innerHTML = 'Subtotal $' + 0
            })
         
            
       })
    


   

