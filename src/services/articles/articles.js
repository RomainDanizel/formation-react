export function getArticles() {
  return fetch('http://localhost:3000/articles')
    .then(response => response.json());
}

export function getArticle(id) {
  return fetch('http://localhost:3000/articles/' + id)
    .then(response => response.json());
}
