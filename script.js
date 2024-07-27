function searchArticles() {
  let input = document.getElementById('search-bar').value.toLowerCase();
  console.log("Input:", input);  // Check input value
  let articlesList = document.getElementById('articles-list');
  let articles = articlesList.getElementsByTagName('li');
  console.log("Articles:", articles);  // Check articles list

  for (let i = 0; i < articles.length; i++) {
      let article = articles[i];
      let link = article.getElementsByTagName('a')[0];
      let textValue = link.textContent || link.innerText;

      if (textValue.toLowerCase().includes(input)) {
          article.style.display = '';
          let regex = new RegExp(input, 'gi');
          let highlightedText = textValue.replace(regex, (match) => `<span class="highlight">${match}</span>`);
          link.innerHTML = highlightedText;
      } else {
          article.style.display = 'none';
      }
  }

  // Sort the articles based on relevance
  let sortedArticles = Array.from(articles).sort((a, b) => {
      let aLink = a.getElementsByTagName('a')[0];
      let bLink = b.getElementsByTagName('a')[0];
      let aTextValue = aLink.textContent || aLink.innerText;
      let bTextValue = bLink.textContent || bLink.innerText;

      return aTextValue.toLowerCase().indexOf(input) - bTextValue.toLowerCase().indexOf(input);
  });

  // Append sorted articles to the list
  sortedArticles.forEach(article => articlesList.appendChild(article));
}
