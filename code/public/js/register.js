 window.addEventListener('load', function() {

    let form = document.querySelector(".form-register");
    form.addEventListener('submit',function(e){
        let divErrorFirstName = document.querySelector('.divErrorFirstName');
        divErrorFirstName.innerHTML = '';
        let divErrorLastName = document.querySelector('.divErrorLastName');
        divErrorLastName.innerHTML = '';
        let divErrorEmail = document.querySelector('.divErrorEmail');
        divErrorEmail.innerHTML = '';
        let divErrorImg = document.querySelector('.divErrorImg');
        divErrorImg.innerHTML = '';
        let divErrorPassword = document.querySelector('.divErrorPassword');
        divErrorPassword.innerHTML = '';
        let divErrorConfpass = document.querySelector('.divErrorConfpass');
        divErrorConfpass.innerHTML = '';
        let errors = [];
        let errorFirstName = '';
        let errorLastName = '';
        let errorEmail = '';
        let errorImg ='';
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        let errorPassword = '';
        let errorConfpass = '';
        // validar que el nombre tenga al menos 2 caracteres
        if( form.firstName.value.length < 2){
             errorFirstName ='*Nombre debe tener al menos 2 caracteres';
             errors.push(errorFirstName);
        };

        // validar que el apellido tenga al menos 2 caracteres
         if( form.lastName.value.length < 2){
              errorLastName ='*Apellido debe tener al menos 2 caracteres';
           errors.push(errorLastName);
         }; 

          // validar que la imagen tenga extensión correcta

          
          if (form.img.value.endsWith('.jpg') || form.img.value.endsWith('.peg') ||
         form.img.value.endsWith('.png') || form.img.value.endsWith('.gif') || form.img.value == "") {
            
             console.log("ok")
         }
         else{
             errorImg ='*Las extensiones de archivo permitidas son .jpg, .peg, .png, .gif';
             errors.push(errorImg); 
         }
       
       
       

         //validar el email
        console.log(mailformat.test(form.email.value))
        if(form.email.value==''){
            errorEmail='*Debes ingresar un email';
            errors.push(errorEmail);
        }
        else if(!mailformat.test(form.email.value)) {
             errorEmail='*Debes ingresar un email válido';
             errors.push(errorEmail);
         };
        // validar que el password tenga al menos 8 caracteres
         if( form.password.value.length < 8){
             errorPassword ='*El password debe tener al menos 8 caracteres';
             errors.push(errorPassword);
        };

        // validar que el conf password sea igual al password
        if( form.confpass.value != form.password.value){
            errorConfpass ='*La confirmación es distinta al password';
            errors.push(errorConfpass);
        }; 

       // si hay errores freno el envio del formulario e imprimo error
       if(errors.length > 0) {
      
            e.preventDefault();
            if (errorFirstName !=''){  
                divErrorFirstName.innerHTML = '<p>' + errorFirstName + '</p>'
            };
             if (errorLastName !=''){
                divErrorLastName.innerHTML = '<p>' + errorLastName + '</p>'
             };
             if (errorEmail !=''){
                divErrorEmail.innerHTML = '<p>' + errorEmail + '</p>'
             };
             if (errorPassword !=''){
                divErrorPassword.innerHTML = '<p>' + errorPassword + '</p>';
             };
             if (errorConfpass !=''){
                divErrorConfpass.innerHTML = '<p>' + errorConfpass + '</p>';
             };
             if (errorImg != ''){
                divErrorImg.innerHTML = '<p>' + errorImg + '</p>'
             };

        } else{
         
            form.submit();
        }
       
    })
 })