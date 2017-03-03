/*
Todos los campos son obligatorios, excepto los dos últimos.
Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula
Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas
Si algún campo presenta error debe informarse al usuario por medio de un alert.
*/
function validateForm(){
  function contrasena (password){
    var espacios = false;
    var contenido = 0;


    if (password === 123456 || password === 0987654 || password === "password"){
      alert("Su contraseña es incorrecta, cambie su contraseña.");
    } else {
      ;
    }
  }

  var nombre = document.getElementById('name').value;
  var apellido = document.getElementById('lastname').value;
  var email = document.getElementById('input-email').value;
  var password = document.getElementById('input-password').value;

  function validarEmail(email){
    var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if (!expresion.test(email)){
      alert("La dirección del correo" + email + "no es correcta.");
    }
  }

  function  validarNombreApellido(nombre,apellido){
    var expresion = /^[a-zA-Z]*$/;
    if (!expresion.test(nombre,apellido)){

    }
  }



/*

  function objeto() {
    var nombre = document.getElementById("name").value;
    var expresion = new RegExp("^[A-Z]{1,2}\\s\\d{4}\\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$");

    if(expreg.test(nombre))
      alert("La matrícula es correcta");
    else
      alert("La matrícula NO es correcta");
  }

*/
