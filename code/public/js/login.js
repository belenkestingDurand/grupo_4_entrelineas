window.addEventListener("load", function(){
    let form = document.querySelector(".form-login")
    console.log(form)
    let errEmail = document.querySelector('.errorLoginEmail')    
    let errPassword = document.querySelector('.errorLoginPassword')
    errEmail.style.display = 'none'
    errPassword.style.display = 'none'
    
    form.addEventListener("submit", function(e){
        
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let errors = [];

        // let emailRegex =  "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/iS";
        if(email.value == ''){
            e.preventDefault()
            errEmail.style.display = 'block'
            errEmail.innerHTML="Campo email no puede estar vacio"
        } else {
            errEmail.style.display = 'none'
            errEmail.innerHTML = ''
        }
        
        if(password.value == '' ){
            e.preventDefault()
            errPassword.style.display = 'block'
            errPassword.innerHTML = "Campo contraseña no puede estar vacio"
        } else {
            errPassword.style.display = 'none'
            errPassword.innerHTML = ''
        }

        if(length(password.value) > 8 ){
            errPassword.style.display = 'block'
            errPassword.innerHTML = "La contraseña tiene que tener 8 caracteres o más"
        } else {
            errPassword.style.display = 'none'
            errPassword.innerHTML = ''
        }
        
        // if(errors.length > 0){
        //     e.preventDefault()
        //     let ulerrors = document.querySelector(".errores")
        //     ulerrors.innerHTML = ''
        //     errors.forEach(function(error){
        //         ulerrors.innerHTML += "<li>" + error + "</li>"
        //     })
        // }
    })
})