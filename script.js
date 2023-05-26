let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

//* Quais caracteres poderao aparecer quando clicar em gerar
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

//* Pega o tamanho de caractere
sizePassword.innerHTML =sliderElement.value;

//* Passa o valor atual do tamanho do caractere
sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

//* Função para gerar a senha

function generatePassword() {
    let pass = "";
    //* n -> tem o tamanho dos caracteres
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
        console.log(pass);
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}