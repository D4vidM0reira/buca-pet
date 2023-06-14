function verificaCampos() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    var eValido = validaFormulario(nome, email, senha1, senha2);
    
    if(eValido){
        var usuario = salvarUsuario(email, senha1)
        if (usuario) 
            window.location.assign("http://127.0.0.1:5500/index.html")
    }
    // if (nome !== "") {
    //   if (email !== "") {
    //     if (verificaEmail(email)) {
    //       if (senha1 !== "") {
    //         if (senha2 !== "") {
    //           verificaSenha();
    //           var usuario = salvarUsuario(email, senha1)
    //             if (usuario) 
    //                 window.location.assign("http://127.0.0.1:5500/index.html")

    //         } else {
    //           alert('O preenchimento do campo de confirmação de senha é obrigatório!');
    //         }
    //       } else {
    //         alert('O preenchimento do campo de senha é obrigatório!');
    //       }
    //     }
    //   } else {
    //     alert('O preenchimento do campo de email é obrigatório!');
    //   }
    // } else {
    //   alert('O preenchimento do campo de nome é obrigatório!');
    // }    
}

function verificaEmail(email) {
    if (email.includes("@")) {
        return true
    } else {
        alert("Endereço de email inválido! Certifique-se de digitar o caractere '@'")
        return false
    }
}
function validaFormulario(nome, email, senha1, senha2){
    var msg = [];
    if(!nome)msg.push("Nome é obrigatório");
    if(!email)msg.push("Email é obrigatório");
    if(!senha1)msg.push("Senha  é obrigatório");
    if(senha1 != senha2)msg.push("Ops! Parece que as senhas não coincidem. Por favor, verifique novamente.")

    if(msg.length>0)
        alert(msg.join("\n"));
    
    return msg.length == 0;

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

function salvarUsuario(email, senha) {
    if (email && senha) {
        const usuario = {
            email: email,
            senha: senha
        };
        return usuario;
    }
    return null
}