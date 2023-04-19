function verificaEmail() {
    const email = document.getElementById("email").value;

    if (email != "") {
        if (!email.includes("@")) {
            alert("Endereço de email inválido! Certifique-se de digitar o caractere '@'");
        }
    } else {
        alert("O preenchimento do campo Email é obrigatório!")
    }
}

function verificaSenha() {
    const senha = document.getElementById("senha").value;
    const caractereEspecial = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const letraMaiuscula = /[A-Z]/;
    const numero = /\d/;
    const msg = ''

    if (senha != "") {

    } else {
        alert("O preenchimento do campo senha é obrigatório!")
    }
}

function verificaSenha() {
    if (!caractereEspecial.test(senha)) {
      return false;
    }
  
    if (!letraMaiuscula.test(senha)) {
      return false;
    }
  
    if (!numero.test(senha)) {
      return false;
    }
    return true;
}

if (verificaSenha()) {
console.log("Senha válida!");
} else {
console.log("Senha inválida!");
}