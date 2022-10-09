const email = document.getElementById("email");

email.addEventListener('submit', (e) => {
    e.preventDefault();

    checarInputs();
});

function checarInputs() {
    const valorEmail = email.value;

    if (valorEmail === " ") {
        mensagemDeErro(valorEmail, "O e-mail é obrigatório");
    } else if (!checkEmail(valorEmail)) {
        mensagemDeErro(valorEmail, "Por favor, insira um e-mail válido")
    } 
}

function mensagemDeErro(input, message) {
    const controle = input.parentElement;
    const small = controle.querySelector("small");

    small.innerText = message;

    controle.className = "caixa erro"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }