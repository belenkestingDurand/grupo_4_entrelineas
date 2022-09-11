window.addEventListener("load", function(){
     let button_comprar = document.querySelector(".add-cart-button")
     let p = document.querySelector(".products-in-cart")
     let contador = 0


     button_comprar.addEventListener("click", function(event){
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