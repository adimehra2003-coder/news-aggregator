// script.js
console.log("Script loaded!"); // Check if JS is working

const newsContainer = document.getElementById("news-container");

// Dummy news articles (no API required)
const dummyArticles = [
  { title: "News 1", description: "This is the first news article.", url: "#" },
  { title: "News 2", description: "This is the second news article.", url: "#" },
  { title: "News 3", description: "This is the third news article.", url: "#" }
];

function displayNews(articles) {
  newsContainer.innerHTML = ""; // Clear previous content

  articles.forEach(article => {
    const newsCard = document.createElement("div");
    newsCard.classList.add("news-card");
    newsCard.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;
    newsContainer.appendChild(newsCard);
  });
}

// Display the dummy news
displayNews(dummyArticles);
