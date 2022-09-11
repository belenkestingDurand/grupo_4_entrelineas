window.addEventListener("load", function(){
    let button_comprar = document.querySelectorAll(".comprar_cart")
    let p = document.querySelector(".products-in-cart")
    let button_borrar = this.document.querySelector(".carrito-botton-style-borrar")
    let contador = 0
 
    //localStorage.removeItem('carrito')

    if(localStorage.carrito){
        let carrito1 = JSON.parse(localStorage.carrito)
        contador = 0
        carrito1.forEach(function(product){
            contador += product.quantity 
        })
        p.innerHTML = contador

        
    }
    else{
        p.innerHTML = contador
    }

    //Escucho el evento click para todos los botones de comprar
    button_comprar.forEach(function(boton){
        boton.addEventListener("click", function(event){
        //Hay carrito?
            if(localStorage.carrito == undefined){
                
                 //Creo el carrito (un array al que se le asigna el id que pasamos en el evento)
                 localStorage.setItem('carrito', JSON.stringify([{id: event.target.dataset.id, quantity:1 }]))
                 contador += 1
                 p.innerHTML = contador
           
            }

            else{
                //si hay carrito le asigno el valor de local storage
                let carrito = JSON.parse(localStorage.carrito)
                let index = carrito.findIndex(function(prod){
                    return prod.id == event.target.dataset.id
                     })
                //Si index encuentra el producto en el carrito sumo uno
                if(index == -1){
                    carrito.push({id: event.target.dataset.id, quantity: 1 })
                    localStorage.setItem('carrito',JSON.stringify(carrito))
                    contador += 1
                    p.innerHTML = contador
                }
                //si index no lo encuentra agrego un nuevo producto al array
                else{
                    carrito[index].quantity += 1
                    console
                    localStorage.setItem('carrito',JSON.stringify(carrito))
                    contador += 1
                    p.innerHTML = contador

                }
            }
        })
    })

})

