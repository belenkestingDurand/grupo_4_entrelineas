window.addEventListener("load", function () {
    // ? tendria que hacer un req? .. para saber que 'field' llega, o no?

    // * crear DIVS donde se mostrarian los errores para luego insertarles los errores en caso que haya
    // << name >>
    let userFirstName = document.querySelector('#userFirstName')
    let userLastName = document.querySelector('#userLastName')

    // << mail >>
    let userEmail = document.querySelector('#userEmail')
    let userNewEmail = document.querySelector('#userNewEmail')
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    // << contraseña >>
    let userPassword = document.querySelector('#userPassword')
    let userNewPassword = document.querySelector('#userNewPassword')
})