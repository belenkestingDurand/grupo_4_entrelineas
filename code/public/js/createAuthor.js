window.addEventListener("load", function () {
    let form = document.querySelector(".createpr-form-padding-left")
    console.log(form)

    
    form.addEventListener("submit", function (e) {
 
        
        let divErrorFirstName = document.querySelector('.divErrorFirstName');

        divErrorFirstName.innerHTML = '';
        let errors = [];
        let errorfullName = '';
    // - Validar fullname entre 3 y 60
        if (form.fullName.value.length < 3 || form.fullName.value.length > 60) {
            errorfullName = "*Debes ingresar entre 3 y 60 caracteres"
            errors.push(errorfullName)
        }
        //- En caso de errores se imprimen los errores
        if (errors.length > 0) {
            e.preventDefault()

            if (errorfullName != '') {
                divErrorFirstName.innerHTML = '<p>' + errorfullName + '</p>';
            }
            
        } 
    })
})