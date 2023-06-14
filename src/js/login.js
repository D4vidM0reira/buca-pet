function acessarSite(email, senha) {
    if (email == 'davidmoreira@gmail.com' && senha == 'insted') {

    }
}

function verificaCamposLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    if (email != '') {
        if (verificaEmail(email)) {
            if (senha != '') {
                acessarSite(email, senha)
            } else {
                alert('O preenchimento do campo de senha é obrigatório!')
            }
        }
    } else {
        alert("O preenchimento do campo de email é obrigatório")
    }
}
    
function verificaEmail(email) {
    if (email.includes("@")) {
        return true
    } else {
        alert("Endereço de email inválido! Certifique-se de digitar o caractere '@'")
        return false
    }
}