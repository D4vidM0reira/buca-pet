function verificaCampos() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    (nome != "") ? 
        (email != "") ?
            verificaEmail() ? 
                (senha1 != "") ?
                    (senha2 != "") ?
                        verificaSenha()
                   : alert('O preenchimento do campo de confirmação de senha é obrigatório!')       
                : alert('O preenchimento do campo de senha é obrigatório!')
            : ""
        : alert("O preenchimento do campo de email é obrigatório")
    : alert('O preenchimento do campo de nome é obrigatório!')
}

function verificaEmail() {
    const email = document.getElementById("email").value;
    (email.includes("@")) ? "" 
    : alert("Endereço de email inválido! Certifique-se de digitar o caractere '@'")
}

function cadastrar() {
    verificaCampos();
}

function verificaSenha() {
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    let msg = '';
    if (senha1 == senha2) {
        let temLetraMaiuscula = /[A-Z]/.test(senha1); 
        let temNumero = /\d/.test(senha1);
        let temCaractereEspecial = /[!@#$%^&*()\-=_+{}[\]:;'"|,.<>/?]/.test(senha1); 
        if (temLetraMaiuscula && temNumero && temCaractereEspecial) {
            alert(`Senha: ${senha1}, válida`)
        } else {
            if (!temLetraMaiuscula) {
                msg += "- A senha deve conter pelo menos uma letra maiúscula \n"
            }
            if (!temNumero) {
                msg += "- A senha deve conter pelo menos um número \n"
            }
            if (!temCaractereEspecial) {
                msg += "- A senha deve conter pelo menos um caracter especial \n"
            }
            alert(msg)
        }
    } else {
        alert("Ops! Parece que as senhas não coincidem. Por favor, verifique novamente.")
    }
}

function exibeSenha() {
    alert('exibe senha')
}