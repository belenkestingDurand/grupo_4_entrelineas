window.addEventListener("load", function(){
    let form = document.querySelector(".form-login")
    console.log(form)
    form.addEventListener("submit", function(e){

    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let errors = []

    if(email.value == ''){
      errors.push("Campo email no puede estar vacio")
    }
    
    /*if(password.value == '' ){
       errors.push("Campo contraseña no puede estar vacio")
    }

    if(length(password.value) >= 8 ){
       errors.push("La contraseña tiene que tener 8 caracteres o más")
    }*/

    if(errors.length > 0){
        e.preventDefault()
        let ulerrors = document.querySelector(".errores")
        ulerrors.innerHTML = ''
        errors.forEach(function(error){
            ulerrors.innerHTML += "<li>" + error + "</li>"
        })
    }
    else{
    
    }

})})