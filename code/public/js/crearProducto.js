window.addEventListener("load", function(){
    let form = document.querySelector(".crearProductForm")
    form.addEventListener("submit", function(e){
    
        let errors = []
        let errorProductName
        //Validaciones del nombre del producto
            //Nombre obligatorio
        if(form.productName.value == ''){
                errorProductName = 'El nombre no puede estar vacío'
                errors.push(errorProductName)
        }
        //Nombre con más de 5 caracteres
        if(form.productName.value.length <= 5){
                errorProductName = 'El nombre no puede ser muy corto'
                errors.push(errorProductName)
        }
        //Nombre con menos de 50 caracteres, resticción de db
        if(form.productName.value.length > 50){
            errorProductName = 'El nombre no puede ser tan largo'
            errors.push(errorProductName)
        }
        //Si hay errores, freno el envío del form y imprimo los errores
        if(errors.length > 0){
            e.preventDefault()
            let divProductNameErrors = document.querySelector(".errorProductName")
            divProductNameErrors.innerHTML = "<p>" + errorProductName + "</p>"
        }

    })

})