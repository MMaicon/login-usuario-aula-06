document.getElementById("formlogin").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const erroMensagem = document.getElementById("msgerror");

    if (email === "ra" && senha === "erra") {
        alert("Login executado com sucesso!");
        window.location.href = "dashboard.html";
    } else {
        erroMensagem.textContent = "Acesso negado, verifique usuário e senha!";
        erroMensagem.style.color = "#ff9800";
    }
});
