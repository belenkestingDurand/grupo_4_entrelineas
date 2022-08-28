window.addEventListener("load", function () {
    let form = document.querySelector(".createpr-form-padding-left")
    console.log(form)

    
    form.addEventListener("submit", function (e) {
 
        
        let divErrorFirstName = document.querySelector('.divErrorFirstName');

        divErrorFirstName.innerHTML = '';
        let errors = [];
        let errorname = '';
    // - Validar name entre 3 y 60
        if (form.name.value.length < 3 || form.name.value.length > 60) {
            errorname = "*Debes ingresar entre 3 y 60 caracteres"
            errors.push(errorname)
        }
        //- En caso de errores se imprimen los errores
        if (errors.length > 0) {
            e.preventDefault()

            if (errorname != '') {
                divErrorFirstName.innerHTML = '<p>' + errorname + '</p>';
            }
            
        } 
    })
})