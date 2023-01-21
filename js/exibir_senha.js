//mostrar ou ocultar senha

function mostrarOcultarSenha() {
  var senha = document.getElementById("senha");

  if (senha.type == "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}
function mostrarOcultarSenha2() {
  var senha = document.getElementById("senha2");

  if (senha.type == "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}
