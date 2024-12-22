const API_KEY = "YOUR_API_KEY"; // Substitua com sua API Key do YouTube
const CHANNEL_ID = "SEU_CHANNEL_ID"; // Substitua pelo ID do seu canal

// Obter estatísticas do canal
async function fetchChannelStats() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
  );
  const data = await response.json();
  const stats = data.items[0].statistics;

  document.getElementById("subscriber-count").textContent = stats.subscriberCount;
  document.getElementById("view-count").textContent = stats.viewCount;
  document.getElementById("video-count").textContent = stats.videoCount;
}

// Obter últimos vídeos
async function fetchVideos() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=3`
  );
  const data = await response.json();
  const videos = data.items;

  const videoList = document.getElementById("video-list");
  videoList.innerHTML = "";

  videos.forEach((video) => {
    const videoCard = `
      <div class="col-md-4">
        <div class="card">
          <img src="${video.snippet.thumbnails.high.url}" class="card-img-top" alt="${video.snippet.title}">
          <div class="card-body">
            <h5 class="card-title">${video.snippet.title}</h5>
            <p class="card-text">${video.snippet.description.substring(0, 100)}...</p>
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" class="btn btn-primary" target="_blank">Assistir</a>
          </div>
        </div>
      </div>
    `;
    videoList.innerHTML += videoCard;
  });
}

// Inicializar funções
document.addEventListener("DOMContentLoaded", () => {
  fetchChannelStats();
  fetchVideos();
});
