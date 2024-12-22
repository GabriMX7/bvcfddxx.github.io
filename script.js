const validCredentials = {
  username: "admin",
  password: "1234"
};

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  if (username === validCredentials.username && password === validCredentials.password) {
    result.className = "alert alert-success";
    result.textContent = "Login bem-sucedido! Bem-vindo.";
  } else {
    result.className = "alert alert-danger";
    result.textContent = "Credenciais inválidas. Tente novamente.";
  }

  result.classList.remove("d-none");
});
