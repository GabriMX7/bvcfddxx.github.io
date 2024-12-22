// Estatísticas Iniciais
const stats = {
  wins: 0,
  gamesPlayed: 0,
  highScore: 0,
};

// Atualizar Estatísticas
function updateStats() {
  document.getElementById("win-count").textContent = stats.wins;
  document.getElementById("games-played").textContent = stats.gamesPlayed;
  document.getElementById("high-score").textContent = stats.highScore;
}

// Gerar Tabela de Líderes
function generateLeaderboard() {
  const leaderboard = [
    { rank: 1, player: "Jogador1", score: 1500 },
    { rank: 2, player: "Jogador2", score: 1200 },
    { rank: 3, player: "Jogador3", score: 1000 },
  ];

  const tbody = document.getElementById("leaderboard-body");
  tbody.innerHTML = "";

  leaderboard.forEach((entry) => {
    const row = `
      <tr>
        <td>${entry.rank}</td>
        <td>${entry.player}</td>
        <td>${entry.score}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Reiniciar Jogo
document.getElementById("reset-game").addEventListener("click", () => {
  stats.wins = 0;
  stats.gamesPlayed = 0;
  stats.highScore = 0;
  updateStats();
  alert("Jogo reiniciado!");
});

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  updateStats();
  generateLeaderboard();
});

// Alternar Menu Lateral
document.getElementById("menu-toggle").addEventListener("click", function () {
  const wrapper = document.getElementById("wrapper");
  wrapper.classList.toggle("toggled");
});
