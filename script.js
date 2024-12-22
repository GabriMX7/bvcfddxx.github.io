// Exemplo de interação: exibir alerta ao clicar em um link
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", (e) => {
    alert(`Você clicou na ${e.target.textContent}`);
  });
});

// Exemplo de navegação suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
