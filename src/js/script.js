function verificaCampos() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    if (email != "") {
        verificaEmail()
        if (verificaEmail()) {
            if (senha == "") {
                alert('O preenchimento do campo de senha é obrigatório!')
            } 
        }
    } else {
        alert('O preenchimento do campo de email é obrigatório!')
    }
}

function verificaEmail() {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Endereço de email inválido! Certifique-se de digitar o caractere '@'");
        return false
    } else {
        return true
    }
}

function validaFormulario() {
    verificaEmail()
    if (verificaSenha()) {
        alert(msg)
    }
}

function verificaSenha() {
    const senha = document.getElementById("senha").value;
    const caractereEspecial = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const letraMaiuscula = /[A-Z]/;
    const numero = /\d/;
    const msg = ''
    if (senha != "") {
        if (!caractereEspecial.test(senha)) {
            return false;
            msg = "A senha deve conter pelo menos um caracter especial"
        }
        if (!letraMaiuscula.test(senha)) {
            return false;
            msg += "A senha deve conter pelo menos uma letra maiúscula"
        }
        if (!numero.test(senha)) {
            return false;
            msg += "A senha deve conter pelo menos um número"
        }
        return true;
    } else {
        alert("O preenchimento do campo senha é obrigatório!")
    }
}