const apiKey = "YOUR_API_KEY"; // Replace with your NewsAPI key
const newsContainer = document.getElementById("news-container");

async function fetchNews() {
  const response = await fetch(
    https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}
  );
  const data = await response.json();

  newsContainer.innerHTML = data.articles
    .map(article => `
      <div class="article">
        <img src="${article.urlToImage || 'images/default.jpg'}" alt="news">
        <h2>${article.title}</h2>
        <p>${article.description || ''}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      </div>
    `)
    .join('');
}

fetchNews();
