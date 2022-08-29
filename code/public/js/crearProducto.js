let form = document.querySelector(".crearProductForm")

window.addEventListener("load", function(){
    //let form = document.querySelector(".crearProductForm")
    console.log(form.productImg.value)
    form.addEventListener("submit", function(e){
    
        let errors = []
        let errorProductName
        let divProductNameErrors = document.querySelector(".errorProductName")
        divProductNameErrors.innerHTML = ""
        //Validaciones del nombre del producto
        //Nombre con más de 5 caracteres
        if(form.productName.value.length < 5){
                errorProductName = 'Ingresar un nombre, minimo 5 caracteres.'
                errors.push(errorProductName)
        }
        //Nombre con menos de 50 caracteres, resticción de db
        if(form.productName.value.length > 50){
            errorProductName = 'El nombre no puede ser tan largo, máximo 50 caracteres.'
            errors.push(errorProductName)
        }
        
        // validar que la imagen tenga extensión correcta
         let errorImg
         let divImgError = document.querySelector(".errorImg")
         divImgError.innerHTML = ""
          if (form.productImg.value == '') {
              errorImg ='Debes subir una imagen';
              errors.push(errorImg);
          } 

          
        if (form.productImg.value.endsWith('.jpg') || form.productImg.value.endsWith('.peg') ||
        form.productImg.value.endsWith('.png') || form.productImg.value.endsWith('.gif') ) {
           
            console.log("ok")
        }
        else if (form.productImg.value = ''){
            console.log("ok")  
        }
        else{
            errorImg ='Las extensiones de archivo permitidas son .jpg, .peg, .png, .gif';
            errors.push(errorImg); 
        }
     

        let errorProductType
        let divProductTypeErrors = document.querySelector(".errorProductType")
        divProductTypeErrors.innerHTML = ""
        //Tipo de producto obligatorio
        if(form.type.value.length <= 0){
            errorProductType = 'Seleccione un tipo de producto.'
            errors.push(errorProductType)
        }


        let errorPrecio
        //Precio obligatorio
        let divPrecioError = document.querySelector(".errorPrecio")
        divPrecioError.innerHTML = ""
        if(form.price.value == ''){
            errorPrecio = 'El precio no puede quedar vacio.'
            errors.push(errorPrecio)
        }
        //Precio no puede ser menor que 100
        if(form.price.value <= 100){
            errorPrecio = 'El precio no puede ser menor a 100.'
            errors.push(errorPrecio)
        }

        let errorDescripcion
        //La descripción tiene que tener 20 caracteres
        let divDescripcionError = document.querySelector(".errorDescripcion")
        divDescripcionError.innerHTML = "" 
        if(form.about.value.length <= 20){
            errorDescripcion = 'La descripcion debe tener 20 caracteres o mas.'
            errors.push(errorDescripcion)
        }


        let errorStock
        //El stock es obligatorio
        let divStockError = document.querySelector(".errorStock")
        divStockError.innerHTML = ""
        if(form.stock.value.length <= 0){
            errorStock = 'Escribe el stock del producto'
            errors.push(errorStock)
        }



        //Si hay errores, freno el envío del form y imprimo los errores
        if(errors.length > 0){
            e.preventDefault()
            if(errorProductName != null){
                divProductNameErrors.innerHTML = "<p>" + errorProductName + "</p>"}

            if(errorProductType != null){
                divProductTypeErrors.innerHTML = "<p>" + errorProductType + "</p>"}

            if(errorPrecio != null){
                divPrecioError.innerHTML = "<p>" + errorPrecio + "</p>"
            }

            if(errorDescripcion != null){
                divDescripcionError.innerHTML = "<p>" + errorDescripcion + "</p>"
            }

            if(errorStock != null){
                divStockError.innerHTML = "<p>" + errorStock + "</p>"
            }

            if(errorImg != null){
                divImgError.innerHTML = "<p>" + errorImg + "</p>"
            }

        }

    }) 

})