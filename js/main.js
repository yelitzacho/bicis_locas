function validateForm(){
  var nombre = document.getElementById('');
  var apellido = document.getElementById('');
  var email = document.getElementById('');
  var password = document.getElementById('');




  if((nombre.innerHTML).length<6){
    alert('[ERROR] Ingrese la primera letra de tu nombre con mayúsculas');
  }
  else if () {
    alert('[ERROR] Ingrese la primera letra de tu apellido con mayúculas');
  }
  else if () {
    alert('[ERROR] Tu correo debería tener un formato similar: name@mundo.com');
  }
  else if (((document.getElementById('input-password')).innerHTML).length<6) {
    alert('[ERROR] Tu password debe tener al menos 6 caracteres.');
  }
  else if () {
    alert();
  }
}
