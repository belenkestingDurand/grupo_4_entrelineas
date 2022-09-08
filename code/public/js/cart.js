window.addEventListener('load', function(){
    let button_borrar = document.querySelector('.carrito-botton-style-borrar')
    let p = document.querySelector(".products-in-cart")
    let section = document.querySelector(".carrito-section")

   if(localStorage.carrito){
    fetch('http://localhost:3000/api/showCart')
    .then (function (resp){
       resp.json()

       .then(function(data){
            let carrito = JSON.parse(localStorage.carrito)
            console.log(carrito)
            let productos_mostrar = data.filter(function(productos){
                                    return (carrito.findIndex(function(item){return item.id == productos.id})) != -1

                                })
            productos_mostrar.forEach(function(product){
                let index = carrito.findIndex(function(prod){
                    return prod.id == product.id
                     })

                let price = product.price * carrito[index].quantity
                
                section.innerHTML += 
            "<article class='carrito-flex-box carrito-flex-direction-row carrito-margin-article carrito-sizing-article carrito-bottom-border'>"
            + "<div class='sizing-div-img-libro'><img src=" + product.picture + " alt='Foto del producto'></div>"
            + "<div class='carrito-flex-box flex-direction-column carrito-sizing-div carrito-flex-align carrito-flex-row-dektop' >"
                + "<div class='sizing-div-nombreDelLibro carrito-align-text-center carrito-desktop-diseño carrito-text-align-desktop'><h5 class='carrito-margin-NombreDelLibro'>"+ product.name +"</h5></div>"
                  + "<div class='carrito-flex-column-dektop'>"
                        + "<div class='carrito-flex-box carrito-flex-direction-row carrito-sizing-div-textos carrito-text-justify-center'>"
                            +"<div class='carrito-border carrito-border-left carrito-recuadro-sizing carrito-align-text-center'><h6 class='carrito-margin-textos carrito-font-color'>-</h6></div>"
                            +"<div class='carrito-border carrito-border-left carrito-border-right carrito-recuadro-sizing carrito-align-text-center'><h6 class='carrito-margin-textos'>"+carrito[index].quantity+"</h6></div>"
                            +"<div class='carrito-border carrito-border-right carrito-recuadro-sizing carrito-align-text-center'><h6 class='carrito-margin-textos carrito-font-color'>+</h6></div>"
                        +"</div>"
                        +"<div><h5 class='desktop-margin-precio'>"+price+"</h5></div>"
                    +"</div>"
                 +"</div>"    
           +"</article>"
            })
                
            });
            
       }) 
    }
    else{
        section.innerHTML = "<div class='no-product-cart'><p>" + "No sumate nada en el carrito aun :(" + "</p></div>"
    }

       button_borrar.addEventListener('click',function(){
        localStorage.removeItem('carrito')
        p.innerHTML = 0
        section.innerHTML = "<div class='no-product-cart'><p>" + "No sumate nada en el carrito aun :(" + "</p></div>"
        })
        
        
   })
    


   

