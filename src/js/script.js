function verificaEmail() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email != "") {
        if (email.includes("@")) {
            alert("Endereço de email válido!");
        } else {
            alert("Endereço de email inválido! Certifique-se de digitar o caractere '@'");
        }
        if (senha != "") {
            
        }
    } else {
        alert("O preenchimento dos campos é obrigatório!")
    }
}