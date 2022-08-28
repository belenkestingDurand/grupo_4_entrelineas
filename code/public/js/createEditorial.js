window.addEventListener("load", function () {
    let form = document.querySelector(".createpr-form-padding-left")
    console.log(form)

    
    form.addEventListener("submit", function (e) {
 
        
        let divErrorFirstName = document.querySelector('.divErrorFirstName');

        divErrorFirstName.innerHTML = '';
        let errors = [];
        let errortitle = '';
    // - Validar title entre 3 y 60
        if (form.title.value.length < 3 || form.title.value.length > 60) {
            errortitle = "*Debes ingresar entre 3 y 60 caracteres"
            errors.push(errortitle)
        }
        //- En caso de errores se imprimen los errores
        if (errors.length > 0) {
            e.preventDefault()

            if (errortitle != '') {
                divErrorFirstName.innerHTML = '<p>' + errortitle + '</p>';
            }
            
        } 
    })
})