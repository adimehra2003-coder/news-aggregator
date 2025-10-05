// script.js

const newsContainer = document.getElementById("news-container");

// Replace with your API key
const API_KEY = "d0f7e171576a4a8a8a98383149590e8d";
const NEWS_URL = https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY};

async function fetchNews() {
  try {
    const response = await fetch(NEWS_URL);
    const data = await response.json();

    if (data.status !== "ok") {
      newsContainer.innerHTML = <p>Failed to load news: ${data.message}</p>;
      return;
    }

    displayNews(data.articles);
  } catch (error) {
    newsContainer.innerHTML = <p>Error fetching news: ${error.message}</p>;
  }
}

function displayNews(articles) {
  newsContainer.innerHTML = ""; // Clear previous content

  articles.forEach(article => {
    const newsCard = document.createElement("div");
    newsCard.classList.add("news-card");

    newsCard.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description || "No description available."}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;

    newsContainer.appendChild(newsCard);
  });
}

// Call fetchNews on page load
fetchNews();
