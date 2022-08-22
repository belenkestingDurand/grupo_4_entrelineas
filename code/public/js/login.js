window.addEventListener("load", function () {
    let form = document.querySelector(".form-login")
    console.log(form)

    
    form.addEventListener("submit", function (e) {
        // e.preventDefault()
        
        let divErrEmail = document.querySelector('.errorLoginEmail')
        divErrEmail.innerHTML = ''
        let divErrPassword = document.querySelector('.errorLoginPassword')
        divErrPassword.innerHTML = ''
        
        let errors = [];
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        
        // - Validar EMAIL
        let mensajeErrMail = ''
        console.log(mailformat.test(form.email.value))
        if (form.email.value == '') {
            mensajeErrMail = "Campo EMAIL no puede estar vacio"
            errors.push(mensajeErrMail)
        } else if (!mailformat.test(form.email.value)) {
            mensajeErrMail = 'Debes ingresar un formato válido de EMAIL';
            errors.push(mensajeErrMail);
        }

        // - Validar PASSWORD
        let mensajeErrPassword = ''
        if (form.password.value == '') {
            mensajeErrPassword = "Campo CONTRASEÑA no puede estar vacio"
            errors.push(mensajeErrPassword)
        } else if (form.password.value.length < 8) {
            mensajeErrPassword = "Campo CONTRASEÑA debe tener al menos 8 caracteres"
            errors.push(mensajeErrPassword)
        }
        //- En caso de errores se imprimen los errores
        if (errors.length > 0) {
            e.preventDefault()
            console.log('ENTRANDO EN ERRORES');

            if (mensajeErrMail != '') {
                console.log('ERROR DE EMAIL');
                console.log(mensajeErrMail);
                divErrEmail.innerHTML = `<p>${mensajeErrMail}</p>`
            }
            if (mensajeErrPassword != '') {
                console.log('ERROR DE PASSWORD');
                console.log(mensajeErrPassword);
                divErrPassword.innerHTML = `<p>${mensajeErrPassword}</p>`
                
            }
        } else {
            //- CASO CONTRARIO se hace 'submit' del formulario
            form.submit()
        }
    })
})