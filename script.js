document.addEventListener("DOMContentLoaded", async () => {
  const newsContainer = document.getElementById("news-container");

  console.log("Script loaded and DOM ready!");

  const dummyArticles = [
    { title: "News 1", description: "This is the first news article.", url: "#" },
    { title: "News 2", description: "This is the second news article.", url: "#" },
    { title: "News 3", description: "This is the third news article.", url: "#" }
  ];

  function displayNews(articles) {
    newsContainer.innerHTML = "";
    articles.forEach(article => {
      const newsCard = document.createElement("div");
      newsCard.classList.add("news-card");
      newsCard.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description || "No description available."}</p>
        <a href="${article.url || "#"}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(newsCard);
    });
  }

  async function fetchRealNews() {
    const API_KEY = "d0f7e171576a4a8a8a98383149590e8d"; // Replace with your key from newsapi.org
    const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    try {
      const response = await fetch(NEWS_URL);
      const data = await response.json();

      console.log("API response:", data);

      // ✅ Check if data.articles exists and is an array
      if (data && Array.isArray(data.articles) && data.articles.length > 0) {
        displayNews(data.articles);
      } else {
        console.warn("API returned no articles or invalid structure — using dummy news.");
        displayNews(dummyArticles);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      displayNews(dummyArticles);
    }
  }

  // Fetch news when page loads
  fetchRealNews();
});
