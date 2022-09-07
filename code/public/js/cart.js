window.addEventListener('load', function(){
    let button_borrar = document.querySelector('.carrito-botton-style-borrar')
    let p = document.querySelector(".products-in-cart")
    button_borrar.addEventListener('click',function(){
        localStorage.removeItem('carrito')
        p.innerHTML = 0
    })
})