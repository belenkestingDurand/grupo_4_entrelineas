
window.addEventListener("load", function () {
    let burger_menu_button = document.querySelector(".centrar-icono")
    let burger_menu = document.querySelector(".burger-menu-backgrwound-admin")
    let main = this.document.querySelector("main")
    burger_menu_button.addEventListener("click", function(){
        burger_menu.classList.remove('burger-menu-display-none')
        main.addEventListener("click", function(){
            burger_menu.classList.add('burger-menu-display-none')
        })

    })
    
})