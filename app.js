const form = document.querySelector("form");
const email = document.getElementById("email");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checarInputs();
});

function checarInputs() {
    const valorEmail = email.value;

    if (valorEmail === "" ) {
        mensagemDeErro(email, "O e-mail é obrigatório");
    } else if (!checkEmail(valorEmail)) {
        mensagemDeErro(email, "Por favor, insira um e-mail válido")
    } else {
        alert("O e-mail está correto!");
    }
}

function mensagemDeErro(input, message) {
    const controle = input.parentElement;
    const divSmall = controle.querySelector(".small");

    divSmall.innerText = message;

    controle.className = "icones erro";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }