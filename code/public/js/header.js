
window.addEventListener("load", function () {
    let burger_menu_button = document.querySelector(".centrar-icono")
    let burger_menu = document.querySelector(".burger-menu-backgrwound")
    let main = this.document.querySelector("main")
    let p = this.document.querySelector(".products-in-cart")
    let contador = 0

    if(localStorage.carrito){
        let carrito1 = JSON.parse(localStorage.carrito)
        carrito1.forEach(function(product){
            contador += product.quantity 
        })
        p.innerHTML = contador

    }
    else{
        p.innerHTML = contador
    }


    burger_menu_button.addEventListener("click", function(){
        burger_menu.classList.remove('burger-menu-display-none')
        main.addEventListener("click", function(){
            burger_menu.classList.add('burger-menu-display-none')
        })

    })
    
})