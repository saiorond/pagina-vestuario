const email = document.getElementById("email").value;

email.addEventListener('submit', (e) => {
    e.preventDefault();

    checarInputs();
});

function checarInputs() {
    if (email === " ") {
        mensagemDeErro(email, "O e-mail é obrigatório");
    } else if (!checkEmail(emailValue)) {
        mensagemDeErro(email, "Por favor, insira um e-mail válido")
    } else {
        mensagemDeSucesso(email);
    }
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }